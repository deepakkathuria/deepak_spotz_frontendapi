import { getServerSideSitemap } from "next-sitemap";
const site_url = process.env.siteUrl;
const base_url = process.env.NEXT_PUBLIC_BASE_URL_WP;
const NEXT_PUBLIC_WP_API_USERNAME = process.env.NEXT_PUBLIC_WP_API_USERNAME;
const NEXT_PUBLIC_WP_API_PASSWORD = process.env.NEXT_PUBLIC_WP_API_PASSWORD;

const credentials = `${NEXT_PUBLIC_WP_API_USERNAME}:${NEXT_PUBLIC_WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

export async function GET(request) {
  // if (!params?.id || Number.isNaN(Number(params.id))) {
  //   return { notFound: true };
  // }

  // const id = Number(params.id) + 1;
  // console.log("ID is = : " + id);
  const URLS_PER_SITEMAP = 200;

  try {
    const fetchPostUrls = async () => {
      const res = await fetch(
        `${base_url}/wp-json/wp/v2/posts?per_page=${URLS_PER_SITEMAP}`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${base64Credentials}`,
          },
        }
      );
      const data = await res.json();
      return data;
    };

    const urls = await fetchPostUrls();

    const sitemap_data = urls?.map((ele) => {
      return {
        loc: `https://${site_url}/${ele.slug}`,
        lastmod: ele.modified_gmt,
        image: ele.featured_image_url,
        news: {
          title: ele.title.rendered,
          publicationName: "SportzWiki Media",
          publicationLanguage: "en",
          date: ele.date_gmt,
        },
      };
    });
    return getServerSideSitemap(sitemap_data);
  } catch (e) {
    console.log(e);
  }
}
