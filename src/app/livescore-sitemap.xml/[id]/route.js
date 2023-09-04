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
  const URLS_PER_SITEMAP = 80;

  try {
    const fetchData = async () => {
      const res1 = await fetch(
        `${baseUrl}/matches/?token=${key}&per_page=${URLS_PER_SITEMAP}&paged=${id}`,
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
        loc: `https://${siteUrl}/live-cricket-scores/${slugify(ele.title, {
          remove: /[*+~.()'"!:@]/g,
          lower: true,
        })}-${ele.match_id}`,
        lastmod: ele.competition.datestart,
      };
    });
    return getServerSideSitemap(sitemap_data);
  } catch (e) {
    console.log(e);
  }
}
