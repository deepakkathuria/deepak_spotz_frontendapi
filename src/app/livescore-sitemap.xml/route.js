import { getServerSideSitemapIndex } from "next-sitemap";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const siteUrl = process.env.siteUrl;

const URLS_PER_SITEMAP = 80;

export async function GET(request) {
  const fetchData = async () => {
    const res1 = await fetch(`${baseUrl}/matches/?token=${key}&per_page=1`);
    const totalLiveScore = await res1.json();
    return totalLiveScore.response.total_items;
  };

  const totalLiveScore = await fetchData();

  const amountOfSitemapFiles = Math.ceil(totalLiveScore / URLS_PER_SITEMAP);

  const sitemaps = Array(amountOfSitemapFiles)
    .fill("")
    .map((v, index) => `https://${siteUrl}/livescore-sitemap-${index}.xml`);

  return getServerSideSitemapIndex(sitemaps);
}
