// import fetchCountOfDynamicPages from "@/lib/fetchCountOfDynamicPages";
import { getServerSideSitemapIndex } from "next-sitemap";
const baseUrl = process.env.BASE_URL_WP;
const siteUrl = process.env.SITE_URL;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const URLS_PER_SITEMAP = 100;

export async function GET(request) {
  const fetchCountOfSitemap = async () => {
    const res = await fetch(`${baseUrl}/wp-json/wp/v2/categories?per_page=1`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });
    const totalCount = parseInt(res.headers.get("X-WP-Total"));
    return totalCount;
  };
  const count = await fetchCountOfSitemap();
  const amountOfSitemapFiles = Math.ceil(count / URLS_PER_SITEMAP);

  const sitemaps = Array(amountOfSitemapFiles)
    .fill("")
    .map((v, index) => `https://${siteUrl}/categories-sitemap-${index}.xml`);

  return getServerSideSitemapIndex(sitemaps);
}
