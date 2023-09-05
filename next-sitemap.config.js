const siteUrl =
  process.env.NODE_ENV == "production" ? process.env.siteUrl : "localhost:3000";

// const siteUrl = "test.sportzwiki.com";

module.exports = {
  siteUrl,
  // generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  // robotsTxtOptions: {
  //   policies: [
  //     {
  //       userAgent: "*",
  //       disallow: ["/secret", "/gaurav", "/testing"],
  //       disallow: "/",
  //     },
  //   ],

  //   additionalSitemaps: [
  //     `https://${siteUrl}/images-sitemap.xml`,
  //     `https://${siteUrl}/post-sitemap.xml`,
  //     `https://${siteUrl}/categories-sitemap.xml`,
  //     `https://${siteUrl}/livescore-sitemap.xml`,
  //     `https://${siteUrl}/series-sitemap.xml`,
  //     `https://${siteUrl}/google-news-sitemap.xml`,
  //   ],
  // },

  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [
    await config.transform(config, "/google-news-sitemap"),
  ],

  exclude: [
    "/secret",
    "/server-sitemap-index.xml",
    "/images-sitemap.xml",
    "/server-sitemap.xml",
    "/post-sitemap.xml",
    "/categories-sitemap.xml",
    "/livescore-sitemap.xml",
    "/series-sitemap.xml",
    "/google-news-sitemap.xml",
  ],
};
