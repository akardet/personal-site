module.exports = {
  siteMetadata: {
    title: `null ui`,
    description: `Freelance web developer and designer with an emphasis on brand identity.`,
    author: `@null_ui`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`
  ]
};
