// const withImages = require("next-images");
// module.exports = withImages();

const nextConfig = {
  images: {
    domains: [
      "i0.wp.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "feetfirst.org",
      "thumbs.dreamstime.com",
      "bengali.sportzwiki.com",
      "images.entitysport.com",
      "demo2.sportzwiki.com",
      "swdupli.sportzwiki.com",
    ],
  },
  // ...
  compiler: {
    removeConsole: false,
  },
  // ...

  rewrites: async () => [
    {
      source: "/images-sitemap-:id.xml",
      destination: "/images-sitemap.xml/:id",
    },

    {
      source: "/post-sitemap-:id.xml",
      destination: "/post-sitemap.xml/:id",
    },

    {
      source: "/categories-sitemap-:id.xml",
      destination: "/categories-sitemap.xml/:id",
    },

    {
      source: "/livescore-sitemap-:id.xml",
      destination: "/livescore-sitemap.xml/:id",
    },

    {
      source: "/series-sitemap-:id.xml",
      destination: "/series-sitemap.xml/:id",
    },

    {
      source: "/cricketers",
      destination: "/cricketers/india",
    },

    {
      source: "/cricket/fantasy-cricket/:id",
      destination: "/cricket/:id",
    },

    {
      source: "/cricket/fantasy-cricket",
      destination: "/cricket/",
    },

    {
      source: "/:id",
      destination: "/:id/page/1",
    },

    {
      source: "/wiki/:id",
      destination: "/wiki/:id/page/1",
    },
  ],
};

module.exports = nextConfig;

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: "none-io1",
    project: "javascript-nextjs",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
