import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `contyg-portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    contact: [
      {
        name: `LinkedIn`,
        link: `https://www.linkedin.com/in/contygm`,
        icon: `fa-brands fa-linkedin`
      },
      {
        name: `GitHub`,
        link: `https://www.github.com/contygm`,
        icon: `fa-brands fa-github`
      },
      {
        name: `Email`,
        link: `contygm@gmail.com`,
        icon: `fa-envelope`
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }]
};

export default config;
