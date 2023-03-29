// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: `Jiyun's Dev Blog`,
  author: 'Jiyun Park',
  headerTitle: 'Dev Blog',
  description: '웹 프론트 개발 블로그 입니다',
  language: 'en',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.junedevblog.com/',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: 'logoDark.png',
  image: '/static/images/profile.png',
  socialBanner: '/static/images/thumb.jpeg',
  email: 'jiyun1937@naver.com',
  github: 'https://github.com/Jiyun1937',
  twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  locale: 'ko-KR',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: 'G-8JP4PSBVCJ', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      lang: 'en',
    },
  },
  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: 'search.json', // path to load documents to search
  //   },
  //   provider: 'algolia',
  //   algoliaConfig: {
  //     // The application ID provided by Algolia
  //     appId: 'R2IYF7ETH7',
  //     // Public API key: it is safe to commit it
  //     apiKey: '599cec31baffa4868cae4e79f180729b',
  //     indexName: 'docsearch',
  //   },
  // },
}

module.exports = siteMetadata
