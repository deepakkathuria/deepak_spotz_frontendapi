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
        disallow: ["/secret", "/gaurav"],
        allow: "/",
      },
    ],

    additionalSitemaps: [
      `${siteUrl}/images-sitemap.xml`,
      `${siteUrl}/post-sitemap.xml`,
      `${siteUrl}/categories-sitemap.xml`,
    ],
  },
  exclude: [
    "/secret",
    "/server-sitemap-index.xml",
    "/images-sitemap.xml",
    "/server-sitemap.xml",
    "/post-sitemap.xml",
    "/categories-sitemap.xml",
  ],
};
