import { getServerSideSitemap } from "next-sitemap";
import slugify from "slugify";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const siteUrl = process.env.siteUrl;

export async function GET(request, { params }) {
  if (!params?.id || Number.isNaN(Number(params.id))) {
    return { notFound: true };
  }

  const id = Number(params.id) + 1;
  //   console.log("ID is = : " + id);
  const URLS_PER_SITEMAP = 50;

  try {
    const fetchData = async (id) => {
      const res1 = await fetch(
        `${baseUrl}/competitions?&paged=${id}&token=${key}&per_page=50`,
        {
          next: { revalidate: 2 },
        }
      );
      const data = await res1.json();
      return data.response;
    };

    const response = await fetchData(id);

    const sitemap_data = response.items?.map((ele) => {
      return {
        loc: `${siteUrl}/live-cricket-scores/${slugify(ele.title, {
          remove: /[*+~.()'"!:@]/g,
          lower: true,
        })}-${ele.cid}/`,
        lastmod: ele.datestart,
      };
    });
    return getServerSideSitemap(sitemap_data);
  } catch (e) {
    console.log(e);
  }
}
