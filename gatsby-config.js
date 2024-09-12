module.exports = {
  siteMetadata: {
    title: 'Data Analytics Fundamentals',
    description: 'A comprehensive guide to data analysis techniques',
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
        name: `Data Analytics Fundamentals`,
        short_name: `DataAnalytics`,
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
