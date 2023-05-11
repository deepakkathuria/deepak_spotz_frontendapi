const siteUrl =
  process.env.NODE_ENV == "production" ? process.env.siteUrl : "localhost:3000";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/secret",
        allow: "/",
      },
    ],

    additionalSitemaps: [
      `${siteUrl}/images-sitemap.xml`,
      `${siteUrl}/post-sitemap.xml`,
    ],
  },
  exclude: ["/secret", "/server-sitemap-index.xml"],
};
