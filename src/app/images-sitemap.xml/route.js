import { getServerSideSitemapIndex } from "next-sitemap";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_WP;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const NEXT_PUBLIC_WP_API_USERNAME = process.env.NEXT_PUBLIC_WP_API_USERNAME;
const NEXT_PUBLIC_WP_API_PASSWORD = process.env.NEXT_PUBLIC_WP_API_PASSWORD;

const credentials = `${NEXT_PUBLIC_WP_API_USERNAME}:${NEXT_PUBLIC_WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const URLS_PER_SITEMAP = 100;

export async function GET(request) {
  const fetchCountOfSitemap = async () => {
    const res = await fetch(`${baseUrl}/wp-json/wp/v2/media?per_page=1`, {
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
    .map((v, index) => `${siteUrl}/images-sitemap-${index}.xml`);

  return getServerSideSitemapIndex(sitemaps);
}
