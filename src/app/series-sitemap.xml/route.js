import { getServerSideSitemapIndex } from "next-sitemap";
const baseUrl = process.env.ENTITY_URL;
const key = process.env.ENTITY_TOKEN;
const siteUrl = process.env.siteUrl;

const URLS_PER_SITEMAP = 80;

export async function GET(request) {
  const fetchData = async () => {
    const res2 = await fetch(`${baseUrl}/competitions?per_page=1&token=${key}`);
    const totalSeries = await res2.json();
    return totalSeries.response.total_items;
  };

  const totalSeries = await fetchData();

  const amountOfSitemapFiles = Math.ceil(totalSeries / URLS_PER_SITEMAP);

  const sitemaps = Array(amountOfSitemapFiles)
    .fill("")
    .map((v, index) => `https://${siteUrl}/series-sitemap-${index}.xml`);

  return getServerSideSitemapIndex(sitemaps);
}
