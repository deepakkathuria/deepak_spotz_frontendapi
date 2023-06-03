import fetchCountOfDynamicCategories from "@/lib/fetchCountOfDynamicCategories";
import { getServerSideSitemapIndex } from "next-sitemap";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const URLS_PER_SITEMAP = 10000;

export async function GET(request) {
  const count = await fetchCountOfDynamicCategories();
  const amountOfSitemapFiles = Math.ceil(count / URLS_PER_SITEMAP);

  const sitemaps = Array(amountOfSitemapFiles)
    .fill("")
    .map((v, index) => `${baseUrl}categories-sitemap-${index}.xml`);

  return getServerSideSitemapIndex(sitemaps);
}
