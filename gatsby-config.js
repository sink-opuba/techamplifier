module.exports = {
  siteMetadata: {
    title: `Tech Amplifier`,
    description: `TechAmplifier - A platform that amplifies innovations and technologies developed in emerging tech ecosystems in Africa.`,
    author: `@techamplifier`,
    twitterUsername: `@techamplifier`,
    url: "https://techamplifier.africa",
    image: `src/images/waffiihub-icon.png`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `techamplifier`,
        short_name: `techamplifier`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/waffiihub-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
