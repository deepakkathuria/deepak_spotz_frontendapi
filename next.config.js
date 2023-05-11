/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i0.wp.com", "res.cloudinary.com", "images.unsplash.com"],
  },
  rewrites: async () => [
    // {
    //   source: "/dynamic-sitemap.xml",
    //   destination: "/dynamic-sitemap",
    // },
    {
      source: "/images-sitemap-:id.xml",
      destination: "/images-sitemap.xml/:id",
    },

    {
      source: "/post-sitemap-:id.xml",
      destination: "/post-sitemap.xml/:id",
    },

    // {
    //   source: '/dynamic-sitemap-:page.xml',
    //   destination: '/dynamic-sitemap/:page',
    // },
  ],
};

module.exports = nextConfig;
