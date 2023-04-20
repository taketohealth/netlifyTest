if (process.env.GATSBY_ENV) {
  require('dotenv').config({
    path: `.env.${process.env.GATSBY_ENV}`,
  })
} else {
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

const { languages, defaultLanguage } = require('./languages')

const plugins_to_pick = [
  `gatsby-plugin-gatsby-cloud`,
  // {
  //   resolve: `gatsby-plugin-gatsby-cloud`,
  //   options: {
  //     headers: {
  //       "/*": [
  //         "meta: http-equiv:refresh content=`0; URL='/zh-HK/'`",
  //       ],
  //     },
  //   }
  // },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://take2health.net`,
    },
  },
  // TODO: Fix SSR FOUC
  // https://github.com/hupe1980/gatsby-theme-material-ui/pull/8
  {
    resolve: `gatsby-plugin-material-ui`,
    options: {
      disableAutoprefixing: true,
      disableMinification: false,
    },
  },
  `gatsby-plugin-smoothscroll`,
  'gatsby-plugin-image',
  // 'gatsby-plugin-react-helmet',
  // 'gatsby-plugin-sitemap',
  {
    resolve: 'gatsby-plugin-sitemap',
    options: {
      excludes: ['/zh-HK/404.html', '/zh-CN/404.html', '/en/404.html', '/zh-HK/404/', '/zh-CN/404/', '/en/404/'],
      query: `{
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSite {
          nodes {
            buildTime
          }
        }
        allSitePage {
          nodes {
            path
          }
        }
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                date
                languages
              }
            }
          }
           
        }
      }`,
      resolvePages: ({ allSitePage: { nodes: sitePages }, allMdx: { edges: mdxPages }, allSite }) => {
        return sitePages
          .map((page) => {
            const pageFile = mdxPages.find(({ node }) => {
              let fileName
              node?.frontmatter?.languages?.forEach((lang) => {
                fileName = `/${lang}${node?.fields?.slug}`
              })
              return page.path === fileName
            })
            if (pageFile) return { ...page, ...pageFile?.node?.frontmatter }
            return { ...page, date: allSite?.nodes[0]?.buildTime }
          })
          .filter(
            (page) =>
              page.path.indexOf('/en/') > -1 || page.path.indexOf('/zh-HK/') > -1 || page.path.indexOf('/zh-CN/') > -1
          )
      },
      serialize: ({ path, date }) => {
        return {
          url: path,
          lastmod: date,
        }
      },
      createLinkInHead: true,
    },
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://take2health.net',
      sitemap: 'https://take2health.net/sitemap/sitemap-0.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
  'gatsby-plugin-no-sourcemaps',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'src/assets/images/favicon.png',
    },
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.md`, `.mdx`],
      gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 570,
            withWebp: true,
          },
        },
        {
          resolve: 'gatsby-remark-embed-video',
          options: {
            width: '100%',
            ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
            height: 320, // Optional: Overrides optional.ratio
            related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
            noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
            // urlOverrides: [
            //   {
            //     id: 'youtube',
            //     embedURL: (videoId) =>
            //       `https://www.youtube-nocookie.com/embed/${videoId}`,
            //   },
            // ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
            containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            iframeId: true, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
          },
        },
      ],
    },
  },
  // `gatsby-remark-images`,
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `blurred`,
        quality: 75,
        // breakpoints: [750, 1080, 1366, 1920],
        // backgroundColor: `transparent`,
        // tracedSVGOptions: {},
        // blurredOptions: {},
        // jpgOptions: {},
        // pngOptions: {},
        // webpOptions: {},
        // avifOptions: {},
      },
      failOn: `none`,
    },
  },
  {
    resolve: `gatsby-transformer-sharp`,
    options: {
      // The option defaults to true
      checkSupportedExtensions: false,
    },
  },
  `gatsby-transformer-json`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/assets/images`,
    },
    __key: 'images',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'imagesTranslation',
      path: `${__dirname}/src/assets/imagesTranslation`,
    },
    __key: 'imagesTranslation',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'cmsTest',
      path: `${__dirname}/content/`,
    },
    __key: 'cmsTest',
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/docs/`,
    },
    __key: 'docs',
  },
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        '@components': 'src/components',
        '@layouts': 'src/layouts',
        '@pages': 'src/pages',
        '@images': 'src/assets/images',
        '@templates': 'src/templates',
        '@views': 'src/views',
        '@content': 'cmsTest',
        '@themes': 'src/themes',
        '@hooks': 'src/hooks',
        '@utils': 'src/utils',
      },
      extensions: ['js'],
    },
  },
  'gatsby-plugin-react-svg',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/assets/locales`,
      name: `locale`,
    },
  },
  {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
      languages,
      defaultLanguage,
      redirect: false,
      // redirect: true, // TODO: upstream(browser-lang)'s issue. // LINK: https://github.com/microapps/gatsby-plugin-react-i18next/issues/89
      fallbackLanguage: defaultLanguage,
      // if you are using Helmet, you must include siteUrl, and make sure you add http:https
      siteUrl: `https://take2health.net/`,
      // you can pass any i18next options
      generateDefaultLanguagePage: true,
      i18nextOptions: {
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
        },
        returnEmptyString: false,
        parseMissingKeyHandler: (key) => {
          // return empty space if missing keys or loading translation
          return key.split('.').slice(-1)
        },
      },
      // Because mdx translation pages are generated by createPate logic so
      // exclude pages that already have language key in path
      pages: [
        { matchPath: '/:lang?/whats-new/promotions/:uid', getLanguageFromPath: true },
        { matchPath: '/:lang?/whats-new/health-tips/:uid', getLanguageFromPath: true },
        { matchPath: '/:lang?/whats-new/campaign/health-tips/:uid', getLanguageFromPath: true },
        { matchPath: '/:lang?/whats-new/campaign/campaign-page-posts/:uid', getLanguageFromPath: true },
        { matchPath: '/:lang?/whats-new/updates/:uid', getLanguageFromPath: true },
        { matchPath: '/:lang?/terms-and-conditions/', getLanguageFromPath: true },
        { matchPath: '/:lang?/terms-and-conditions/:uid', getLanguageFromPath: true },
        { matchPath: '/:lang?/about-us/join-us/:uid', getLanguageFromPath: true },
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    options: {
      devMode: false,
    },
  },
  {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
      modulePath: `${__dirname}/src/cms/cms.js`,
    },
  },
  `gatsby-plugin-meta-redirect`, // make sure to put last in the array
  // 'gatsby-plugin-netlify',
]

process.env.GATSBY_ENV === 'staging' ? plugins_to_pick.unshift(`gatsby-plugin-no-index`) : plugins_to_pick

module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    siteUrl: 'https://take2health.net',
    defaultTitle: 'Take2 Health',
    defaultImage: '/src/assets/images/favicon.png',
    titleTemplate: ' · 早期鼻咽癌篩查',
    defaultDescription:
      'Take2 Prophecy™ 以次世代DNA測序技術進行早期鼻咽癌篩查，讓患者透過年度體檢儘早發現癌症，從而提高治癒機會。',
    messenger: 'https://www.facebook.com/messages/t/100757495628023',
    whatsappAccount: '(852) 5377 0823',
    whatsapp:
      'https://api.whatsapp.com/send/?phone=85253770823&text=Hello%2C+I+want+to+know+more+about+Prophecy+Test%21+&app_absent=0',
    facebook: 'https://www.facebook.com/take2health.ltd',
    linkedin: 'https://www.linkedin.com/company/take2-health',
    youtube: 'https://youtu.be/BACVA3es0NI',
    campaignPage: 'https://take2health.net/whats-new/campaign/',
    email: 'info@take2.health',
    phone: '(852) 3613 0533',
  },
  // trailingSlash: 'always', // always add trailing slash
  trailingSlash: 'ignore', // no modification
  // trailingSlash: 'never', // remove trailing slash
  plugins: plugins_to_pick,
}
