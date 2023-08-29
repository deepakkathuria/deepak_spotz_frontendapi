const siteUrl =
  process.env.NODE_ENV == "production" ? process.env.siteUrl : "localhost:3000";

// const siteUrl = "test.sportzwiki.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/secret", "/gaurav", "/testing"],
        disallow: "/",
        // allow: "/",
      },
    ],

    additionalSitemaps: [
      `${siteUrl}/images-sitemap.xml`,
      `${siteUrl}/post-sitemap.xml`,
      `${siteUrl}/categories-sitemap.xml`,
      `${siteUrl}/livescore-sitemap.xml`,
      `${siteUrl}/series-sitemap.xml`,
      `${siteUrl}/google-news-sitemap.xml`,
    ],
  },

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
