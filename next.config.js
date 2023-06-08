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
    ],
  },

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
  ],
};

module.exports = nextConfig;
