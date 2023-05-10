const siteUrl =
  process.env.NODE_ENV == "production" ? process.env.siteUrl : "localhost:3000";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 10000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/secret",
        allow: "/",
      },
    ],

    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
  exclude: ["/secret"],
};
