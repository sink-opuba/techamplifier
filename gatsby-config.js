require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Tech Amplifier`,
    description: `TechAmplifier - A platform that amplifies innovations and technologies developed in emerging tech ecosystems in Africa.`,
    author: `@techamplifier`,
    twitterUsername: `@techamplifier`,
    siteUrl: "https://techamplifier.africa",
    image: `src/images/techamplifier-logo-blue.png`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `techamplifier`,
        short_name: `techamplifier`,
        start_url: `/`,
        background_color: `#1D014B`,
        theme_color: `#1D014B`,
        display: `minimal-ui`,
        icon: `src/images/techamplifier-logo-white.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      plugins: [
        // gatsby-remark-relative-images must
        // go before gatsby-remark-images

        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 700,
            linkImagesToOriginal: false,
          },
        },
      ],
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
