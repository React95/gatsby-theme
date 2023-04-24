module.exports = {
  siteMetadata: {
    title: 'React95 + Gatsby theme',
    description: 'React95 Gatsby theme documentation',
    siteUrl: 'https://react95.github.io/gatsby-theme',
  },
  pathPrefix: '/gatsby-theme',
  plugins: [
    {
      resolve: '@react95/gatsby-theme',
      options: {
        contentPath: 'content',
      },
    },
  ],
};
