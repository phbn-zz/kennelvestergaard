const path = require('path');

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-svgr`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `nana`,
        path: `${__dirname}/src/images/nana`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hvalpe`,
        path: `${__dirname}/src/images/hvalpe`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `prius`,
        path: `${__dirname}/src/images/prius`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `art`,
        path: `${__dirname}/src/images/art`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kennel Vestergaard`,
        short_name: `kvest`,
        start_url: `/`,
        background_color: `#8bd8ed`,
        theme_color: `#8bd8ed`,
        display: `minimal-ui`,
        icon: `static/favicon.svg`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`average`, `prata:400,700`]
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@common': path.resolve(__dirname, 'src/components/common'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@sections': path.resolve(__dirname, 'src/components/sections'),
          '@styles': path.resolve(__dirname, 'src/styles/'),
          '@static': path.resolve(__dirname, 'static/')
        }
      }
    }
  ]
};
