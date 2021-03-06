const { resolve } = require("path");

module.exports = {
  siteMetadata: {
    title: `ヤースペーステクノロジー`,
    description: `A simple Gatsby starter leveraging react-bootstrap and little else.`,
    author: `@mik3y`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options:{
        name:`information`,
        path:`${__dirname}/src/content/information`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    {
      resolve:'gatsby-source-microcms',
      options:{
        apiKey:'017751e2-1531-41a6-9f0c-0f3612404e83',
        serviceId:'gatsby-sample1111',
        apis:[{
          endpoint:'information',
        }],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
