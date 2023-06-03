import { getServerSideSitemap } from "next-sitemap";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.siteUrl;

export async function GET(request, { params }) {
  if (!params?.id || Number.isNaN(Number(params.id))) {
    return { notFound: true };
  }

  const id = Number(params.id) + 1;
  console.log("ID is = : " + id);
  const URLS_PER_SITEMAP = 10000;

  try {
    const response = await axios.get(
      `${API_URL}/getcategoryslug?page=${id}&limit=${URLS_PER_SITEMAP}`
    );

    const sitemap_data = response.data?.map((ele) => {
      return {
        loc: `${site_url}/${ele.taxonomy == "post_tag" ? "wiki/" : ""}${
          ele.slug
        }`,
        lastmod: ele.last_modified,
      };
    });
    return getServerSideSitemap(sitemap_data);
  } catch (e) {
    console.log(e);
  }
}
