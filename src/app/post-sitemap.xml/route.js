import fetchCountOfDynamicPages from "@/lib/fetchCountOfDynamicPages";
import { getServerSideSitemapIndex } from "next-sitemap";
const baseUrl = process.env.siteUrl;

const URLS_PER_SITEMAP = 10000;

export async function GET(request) {
  const count = await fetchCountOfDynamicPages();
  // console.log(count, "counttttttttttttt");
  const amountOfSitemapFiles = Math.ceil(count / URLS_PER_SITEMAP);
  // console.log(amountOfSitemapFiles, "counttttttttttttt");

  const sitemaps = Array(amountOfSitemapFiles)
    .fill("")
    .map((v, index) => `${baseUrl}/post-sitemap-${index}.xml`);

  // console.log(sitemaps);

  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  // return getServerSideSitemapIndex([
  //   "https://example.com/image-path-1.xml",
  //   "https://example.com/image-path-2.xml",
  //   "https://example.com/image-path-3.xml",
  // ]);
  return getServerSideSitemapIndex(sitemaps);
}
