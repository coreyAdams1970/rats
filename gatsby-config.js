require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        // edit below
        title: `Rage Against the Supremes Band`,
        author: `Corey Smaller`,
        description: `party and wedding band in salt lake city UT`,
        siteUrl: `https://www.ratsband.com`,
        social: {
            twitter: `ratsband`,
            instagram: `ratsband`,
        },
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sass",
        "gatsby-plugin-netlify",
        "gatsby-plugin-offline",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-typescript",
        "gatsby-plugin-feed-mdx",
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/blog`,
                name: "blog",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/assets`,
                name: "assets",
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: ["gatsby-remark-images"],
                plugins: ["gatsby-remark-images"],
                defaultLayouts: {
                    default: require.resolve("./src/components/layout.tsx"),
                },
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".mdx", ".md"],
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 590,
                        },
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                        options: {
                            wrapperStyle: "margin-bottom: 1.0725rem",
                        },
                    },
                    {
                        resolve: "gatsby-remark-vscode",
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                    },
                    {
                        resolve: "gatsby-remark-smartypants",
                    },
                ],
                plugins: ["gatsby-remark-images"],
            },
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                // edit below
                trackingId: "G-C67R4TN00K",
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "ratsband",
                short_name: "RatsBand",
                start_url: "/",
                background_color: "#ffffff",
                theme_color: "#663399",
                display: "minimal-ui",
                // edit below
                icon: `content/assets/logo_transparent.png`,
            },
        },
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {},
                // Set to false to allow builds to continue on image errors
                failOnError: true,
                // deprecated options and their defaults:
                base64Width: 20,
                forceBase64Format: "png", // valid formats: png,jpg,webp
                useMozJpeg: process.env.GATSBY_JPEG_ENCODER === "MOZJPEG",
                stripMetadata: true,
                defaultQuality: 50,
            },
        },
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography",
            },
        },
    ],
};
