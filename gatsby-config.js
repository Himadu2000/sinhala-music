if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = function (key) {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const privateKey = parseNewLines(process.env.FIREBASE_CONFIG_PRIVATE_KEY)

module.exports = {
  siteMetadata: {
    title: `Sinhala Music`,
    description: `Classical Sinhala Music.`,
    author: `@himadu`,
    siteUrl: "http://himadu.me/sinhala-music",
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
        name: `Sinhala-Music`,
        short_name: `Sinhala-Music`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // Robots.txt
    "gatsby-plugin-robots-txt",
    // sass/scss
    `gatsby-plugin-sass`,
    // Page Load screen
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // typescript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // was jsx defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // firebase theme
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyDWHcUtFU9jVz9QqQOXbvi7BtKCDmEKd7U",
          authDomain: "sinhala-music.firebaseapp.com",
          databaseURL: "https://sinhala-music.firebaseio.com",
          projectId: "sinhala-music",
          storageBucket: "sinhala-music.appspot.com",
          messagingSenderId: "545439947091",
          appId: "1:545439947091:web:bddced9405a7171ada29a6",
          measurementId: "G-QW4SB7KWCK",
        },
        loginPath: "/user/login",
        loginRedirectPath: "/contact",
        socialLogins: ["google"],
      },
    },

    // flamelink
    {
      resolve: "gatsby-source-flamelink",
      options: {
        firebaseConfig: {
          projectId: "sinhala-music",
          clientEmail:
            "firebase-adminsdk-5njpr@sinhala-music.iam.gserviceaccount.com",
          privateKey: privateKey,
          databaseURL: "https://sinhala-music.firebaseio.com",
          storageBucket: "sinhala-music.appspot.com",
        },
        dbType: "cf",
        environment: "production",
        content: true,
        populate: true,
        navigation: true,
        globals: true,
        content: [{ schemaKey: "music", populate: true }],
      },
    },
  ],
}
