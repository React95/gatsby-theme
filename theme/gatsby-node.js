const fs = require('fs');
const { createFilePath } = require(`gatsby-source-filesystem`);

const MDX_TEMPLATE = `---
title: Getting Started
description: Your awesome and nostalgic website!
icon:
  name: Computer
  variant: 32x32_4
---

# Your website starts on this folder

Feel free to add your content!
`;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.onPreBootstrap = ({ reporter }, { contentPath = 'content' }) => {
  if (!fs.existsSync(contentPath)) {
    reporter.info(
      `creating the ${contentPath} directory with a getting started file`,
    );

    fs.mkdirSync(contentPath);
    fs.writeFileSync(`${contentPath}/getting-started.mdx`, MDX_TEMPLATE);
  }
};

exports.createPages = async (
  { actions, graphql, reporter },
  { basePath = '/' },
) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              icon {
                name
                variant
              }
              title
              description
              image
              modal
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading content', reporter.errors);

    return;
  }
  const desktop = require.resolve('./src/components/desktop.js');

  createPage({
    path: basePath,
    component: desktop,
    context: { content: {}, data: result.data },
  });

  const contents = result.data.allMdx.edges;

  contents.forEach(({ node }) => {
    const {
      fields: { slug },
    } = node;

    createPage({
      path: slug,
      component: `${desktop}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { content: node, data: result.data },
    });
  });
};

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    schema.buildObjectType({
      name: 'Icon',
      fields: {
        name: 'String!',
        variant: 'String!',
      },
    }),
    schema.buildObjectType({
      name: 'Mdx',
      fields: {
        frontmatter: 'MdxFrontmatter!',
      },
      interfaces: ['Node'],
      extensions: {
        infer: true,
      },
    }),
    schema.buildObjectType({
      name: 'MdxFrontmatter',
      fields: {
        title: 'String',
        description: 'String',
        icon: 'Icon',
        image: 'String',
        modal: {
          type: 'Boolean',
          resolve: ({ modal = true }) => modal,
        },
      },
      extensions: {
        infer: true,
      },
    }),
    schema.buildObjectType({
      name: 'SiteSiteMetadata',
      fields: {
        author: 'String',
        image: 'String',
      },
      extensions: {
        infer: true,
      },
    }),
  ];

  createTypes(typeDefs);
};
