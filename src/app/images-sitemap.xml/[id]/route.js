import { getServerSideSitemap } from "next-sitemap";
const site_url = process.env.siteUrl;
const base_url = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

export async function GET(request, { params }) {
  if (!params?.id || Number.isNaN(Number(params.id))) {
    return { notFound: true };
  }

  const id = Number(params.id) + 1;
  console.log("ID is = : " + id);
  const URLS_PER_SITEMAP = 100;

  try {
    const fetchImagesUrl = async (id) => {
      const res = await fetch(
        `${base_url}/wp-json/wp/v2/media?per_page=100&page=${id}`,
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

    const urls = await fetchImagesUrl(id);

    const sitemap_data = urls?.map((ele) => {
      return {
        loc: `${ele.guid.rendered}`,
        lastmod: ele.modified_gmt,
      };
    });
    return getServerSideSitemap(sitemap_data);
  } catch (e) {
    console.log(e);
  }
}
