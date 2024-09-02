module.exports = {
  siteMetadata: {
    title: `Swift Data Analysis`,
    description: `A comprehensive guide to learning Swift, data visualization, machine learning, and financial analysis.`,
    author: `@audivet`,
    siteUrl: `https://swift-data-analysis.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
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
        name: `Swift Data Analysis`,
        short_name: `SwiftData`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-remark-code-titles`,
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
