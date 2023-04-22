import objectPath from 'object-path';

const navify = (nodes, { basePath }) => {
  let allRoutes = {};

  nodes.forEach(({ fields: { slug }, frontmatter }) => {
    const path = slug.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '.');

    if (objectPath.has(allRoutes, path)) {
      const origin = objectPath.get(allRoutes, path);

      objectPath.set(allRoutes, path, { slug, ...frontmatter, ...origin });
    } else {
      objectPath.set(allRoutes, path, { slug, ...frontmatter });
    }
  });

  return allRoutes[basePath.replace(/^\//, '')] || allRoutes;
};

export default navify;
