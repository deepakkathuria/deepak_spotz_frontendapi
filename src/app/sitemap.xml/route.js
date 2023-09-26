export async function GET() {
  // Define an array of sitemap URLs
  const sitemaps = [
    // "https://sportzwiki.com/feed/",
    // "https://sportzwiki.com/aboutus/",
    // "https://sportzwiki.com/contact-us/",
    // "https://sportzwiki.com/copyright-notice/",
    // "https://sportzwiki.com/cricket-series/recent/",
    // "https://sportzwiki.com/cricket-series/",
    // "https://sportzwiki.com/cricket-series/upcoming/",
    // "https://sportzwiki.com/cricket-team/",
    // "https://sportzwiki.com/disclaimer/",
    // "https://sportzwiki.com/dmca/",
    // "https://sportzwiki.com/live-cricket-scores/upcoming/",
    // "https://sportzwiki.com/",
    // "https://sportzwiki.com/privacy-and-cookies-policy/",
    // "https://sportzwiki.com/sports/cricket/",
    "https://sportzwiki.com/pages-sitemap.xml",
    "https://sportzwiki.com/google-news-sitemap.xml",
    "https://sportzwiki.com/images-sitemap.xml",
    "https://sportzwiki.com/post-sitemap.xml",
    "https://sportzwiki.com/categories-sitemap.xml",
    "https://sportzwiki.com/livescore-sitemap.xml",
    "https://sportzwiki.com/series-sitemap.xml",
    "https://sportzwiki.com/tags-sitemap.xml",
  ];

  // Build the sitemap index XML
  const sitemapIndexXML = await buildSitemapIndex(sitemaps);

  return new Response(sitemapIndexXML, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

// Function to build the sitemap index XML
async function buildSitemapIndex(sitemaps) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const sitemapURL of sitemaps) {
    const lastmod = await getLastModified(sitemapURL);
    xml += "<sitemap>";
    xml += `<loc>${sitemapURL}</loc>`;
    xml += `<lastmod>${lastmod}</lastmod>`;
    xml += "</sitemap>";
  }

  xml += "</sitemapindex>";
  return xml;
}

// Function to get the last modified date of a sitemap URL
async function getLastModified(url) {
  try {
    const response = await fetch(url);
    const lastModified = response.headers.get("last-modified");
    if (lastModified) {
      // Assuming the last modified date is in RFC1123 format
      const lastModifiedDate = new Date(lastModified);
      // Convert to IST (Indian Standard Time)
      lastModifiedDate.setHours(lastModifiedDate.getHours() + 5);
      lastModifiedDate.setMinutes(lastModifiedDate.getMinutes() + 30);
      return lastModifiedDate.toISOString();
    }
  } catch (error) {
    console.error(`Error fetching last modified date for ${url}:`, error);
  }
  // Return a default date or value when last-modified is not available
  return "2023-09-26T00:00:00.000Z"; // You can set any default date you prefer
}
