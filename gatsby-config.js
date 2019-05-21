module.exports = {
  pathPrefix: `/about`,
  siteMetadata: {
    title: `Flowra`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-112420589-1',
        anonymize: true
      }
    },
    `gatsby-plugin-netlify`, // Must be the last loaded plugin
    // make sure to put last in the array
    {
      resolve: `gatsby-plugin-netlify-headers`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=604800",
          ]
        },
      }
    }
  ]
};
