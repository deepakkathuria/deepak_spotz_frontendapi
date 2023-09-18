import { getServerSideSitemap } from "next-sitemap";

const SITE_URL = process.env.siteUrl;
const BASE_URL_WP = process.env.BASE_URL_WP;
const CREDENTIALS = `${process.env.WP_API_USERNAME}:${process.env.WP_API_PASSWORD}`;
const BASE64_CREDENTIALS = Buffer.from(CREDENTIALS, "utf-8").toString("base64");
const HEADERS = {
  Authorization: `Basic ${BASE64_CREDENTIALS}`,
};

async function fetchCategoryDetails(id) {
  const res = await fetch(`${BASE_URL_WP}/wp-json/wp/v2/categories/${id}`, {
    headers: HEADERS,
  });
  return res.json();
}

async function fetchCategories(id) {
  const res = await fetch(
    `${BASE_URL_WP}/wp-json/wp/v2/categories?per_page=100&page=${id}`,
    {
      headers: HEADERS,
    }
  );
  return res.json();
}

export async function GET(request, { params }) {
  if (!params?.id || Number.isNaN(Number(params.id))) {
    return { notFound: true };
  }

  const id = Number(params.id) + 1;
  console.log("ID is = : " + id);

  try {
    const urls = await fetchCategories(id);

    const sitemap_data = await Promise.all(
      urls.map(async (ele) => {
        let parentSlug = "";
        let grandParentSlug = "";

        if (ele.parent) {
          const parentDetails = await fetchCategoryDetails(ele.parent);
          parentSlug = parentDetails.slug;

          if (parentDetails.parent) {
            const grandParentDetails = await fetchCategoryDetails(
              parentDetails.parent
            );
            grandParentSlug = grandParentDetails.slug;
          }
        }

        return {
          loc: `${SITE_URL}/${grandParentSlug ? grandParentSlug + "/" : ""}${
            parentSlug ? parentSlug + "/" : ""
          }${ele.slug}`,
        };
      })
    );

    return getServerSideSitemap(sitemap_data);
  } catch (e) {
    console.error("Error generating sitemap:", e);
    return { error: "Failed to generate sitemap" };
  }
}
