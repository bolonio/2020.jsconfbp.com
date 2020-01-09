
module.exports = {
  siteMetadata: {
    siteUrl: 'https://jsconfbp.com',
    title: 'JSConf Budapest 2020',
    description: 'JSConf Budapest 2020, September 24-25, Budapest, Hungary. Tickets from €205, including free workshops, inclusive catering and barista coffee!',
    keywords: 'jsconf, javascript, jsconfbp, conference, budapest, jsconf budapest, diversity, inclusivity, community',
    twitter: '@jsconfbp'
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "updates",
        path: `${__dirname}/updates`,
        ignore: [
          `**/*.jpg`,
          `**/*.svg`,
          `**/*.gif`,
          `**/*.jpeg`,
          `**/*.webp`,
          `**/*.png`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'postimages',
        path: `${__dirname}/updates`,
        ignore: [
          `**/*.mdx`,
          `**/*.js`,
          `**/*.mp4`,
          `**/*.m4v`
        ],
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-smartypants'
        ],
      },
    },

    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-react-helmet',

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'jsconf-budapest',
        short_name: 'jsconfbp',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-58489830-1",
      },
    },
    /* {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    }, */
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`,`400`,`700`],
          },
          {
            family: `Rubik`,
            variants: [`300`,`400`,`700`]
          },
        ],
      },
    }
  ],
}
