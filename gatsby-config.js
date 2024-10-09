module.exports = {
  siteMetadata: {
    title: `Data Analytics Fundamentals`,
    description: `Learn data analytics with Python, Swift, and essential tools like Excel, SQL, and more.`,
    author: `@audivet`,
    siteUrl: `https://swift-data-analysis-otpd8ti0d-audivets-projects.vercel.app`, // Updated to your real site URL
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // For handling dynamic metadata

    // Image-related plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`, // Ensure images path is correct
      },
    },
    `gatsby-plugin-image`, // For optimized images
    `gatsby-transformer-sharp`, // Needed for image transformations
    `gatsby-plugin-sharp`, // Needed for optimized images

    // Manifest configuration for PWA
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `data-analytics-fundamentals`,
        short_name: `DAF`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#0056b3`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // Correct icon path
      },
    },

    // Sitemap for SEO
    `gatsby-plugin-sitemap`, 

    // Google Analytics with Google GTag
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-RJ0TTLQ4KN", // Your Google Analytics tracking ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },

    // Font loading optimization
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "500", "700"],
            },
            {
              family: "Open Sans",
              variants: ["300", "400", "600", "700"],
            },
          ],
        },
      },
    },

    // Preload fonts for better performance
    `gatsby-plugin-preload-fonts`,

    // Offline support and Progressive Web App (PWA) functionality
    `gatsby-plugin-offline`,

    // Bundle analyzer for optimizing JS bundle
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: 'static',
        reportFilename: './report.html',
        openAnalyzer: true,
      },
    },
  ],
};