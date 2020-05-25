const { apiEndpoint } = require('./prismic-config')
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint)

module.exports = {
  siteMetadata: {
    title: `Gatsby Prismic Blog`,
    description: `Blog example for Gatsby & Prismic`,
    author: `@owdlevi`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: 'mqg4evw',
        },
      },
    },

    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1], // Loads the repo name from prismic configuration
        path: '/preview',
        previews: true,
        pages: [
          {
            type: 'Projects',
            match: '/projects/:uid',
            path: '/projects-preview',
            component: require.resolve('./src/templates/project.js'),
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
