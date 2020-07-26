const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Lucas Costa Amaral`,
    description: `Lucas Costa Amaral`,
    author: `@lucca`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        sections: path.join(__dirname, 'src/sections'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/images'),
        layout: path.join(__dirname, 'src/layout'),
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
