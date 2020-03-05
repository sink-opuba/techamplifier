module.exports = {
  siteMetadata: {
    title: `Tech Amplifier`,
    description: `TechAmplifier - A platform that amplifies innovations and technologies developed in emerging tech ecosystems in Africa.`,
    author: `@techamplifier`,
    twitterUsername: `@techamplifier`,
    siteUrl: "https://techamplifier.africa",
    image: `src/images/waffiihub-icon.png`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "blog",
        path: `${__dirname}/blog/`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/waffiihub-icon.png`,
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
