export async function GET() {
  // Define an array of page URLs
  const pages = [
    "https://sportzwiki.com/",
    "https://sportzwiki.com/aboutus/",
    "https://sportzwiki.com/contact-us/",
    "https://sportzwiki.com/copyright-notice/",
    "https://sportzwiki.com/cricket-series/recent/",
    "https://sportzwiki.com/cricket-series/",
    "https://sportzwiki.com/cricket-series/upcoming/",
    "https://sportzwiki.com/cricket-team/",
    "https://sportzwiki.com/disclaimer/",
    "https://sportzwiki.com/dmca/",
    "https://sportzwiki.com/live-cricket-scores/upcoming/",
    "https://sportzwiki.com/privacy-and-cookies-policy/",
    "https://sportzwiki.com/sports/cricket/",
  ];

  // Build the pages sitemap XML
  const pagesSitemapXML = await buildPagesSitemap(pages);

  return new Response(pagesSitemapXML, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

async function buildPagesSitemap(pages) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  const currentDateIST = getCurrentDateIST(); // Get the current date and time in IST

  for (const pageURL of pages) {
    xml += "<url>";
    xml += `<loc>${pageURL}</loc>`;
    xml += `<lastmod>${currentDateIST}</lastmod>`; // Set the <lastmod> to the current date in IST
    xml += "</url>";
  }

  xml += "</urlset>";
  return xml;
}

function getCurrentDateIST() {
  const currentDate = new Date();
  // IST is UTC+5:30, so we add 5 hours and 30 minutes to the current date and time
  currentDate.setHours(currentDate.getHours() + 5);
  currentDate.setMinutes(currentDate.getMinutes() + 30);
  return currentDate.toISOString();
}
