import React from "react";
import styles from "../../CategoryPosts.module.css";
import NewsCard from "../../../../components/common/NewsCard";
import axios from "axios";
import Breadcrumb from "../../../../components/common/Breadcrumb";
// const base_url = process.env.BASE_URL_DO;
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const site_url = process.env.SITE_URL;
// import OrganisationLd from "@/json-ld/OrganisationLd";

import { BreadcrumbJsonLd } from "next-seo";
import { OrganizationJsonLd } from "next-seo";
// import { redirect } from "next/dist/server/api-utils";
import FaqLive from "../../../../components/common/FaqLive";
import Link from "next/link";

const fetchMetaData = async (categorySlug) => {
  const res = await fetch(
    `${BASE_URL_WP}/wp-json/rankmath/v1/getHead?url=${BASE_URL_WP}/${categorySlug}`,
    {
      next: { revalidate: 1500 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  const headData = await res.json();
  return headData;
};

const fetchPostsByCategoryId = async (categoryId, currentPage) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/posts?categories=${categoryId}&page=${currentPage}&per_page=48`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
      cache: "no-store",
    }
  );

  const posts = await res.json();
  return posts ?? [];
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const fetchCategoryDataBySlug = async (categorySlug) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/categories?slug=${categorySlug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
      cache: "no-store",
    }
  );

  const categoryData = await res.json();
  return categoryData;
};

export async function generateMetadata({ params }) {
  const DATA_PER_PAGE = 48;
  const { category, slug, slug2 } = params;
  let { "page-no": currentPage = "1" } = params;
  currentPage = parseInt(currentPage);

  const metaData = await fetchMetaData(slug2);
  // console.log(metaData, "metaDatametaDatametaDatametaData");
  const headContent = metaData.head;
  // Extract meta title
  const titleMatch = headContent.match(/<title>(.*?)<\/title>/);
  const metaTitle = titleMatch ? titleMatch[1] : null;

  // Extract meta description
  const descriptionMatch = headContent.match(
    /<meta name="description" content="(.*?)"/
  );
  const metaDescription = descriptionMatch ? descriptionMatch[1] : null;

  // Extract robots
  const robotsMatch = headContent.match(/<meta name="robots" content="(.*?)"/);
  const robots = robotsMatch ? robotsMatch[1] : null;

  // Split the content by commas
  const robotsProperties = robots.split(",").map((property) => property.trim());
  // Access each property separately
  const follow = robotsProperties.includes("follow") ? true : false;
  const index = robotsProperties.includes("index") ? true : false;
  const maxSnippet = robotsProperties.find((property) =>
    property.startsWith("max-snippet:")
  );
  const maxVideoPreview = robotsProperties.find((property) =>
    property.startsWith("max-video-preview:")
  );
  const maxImagePreview = robotsProperties.find((property) =>
    property.startsWith("max-image-preview:")
  );

  // Extract canonical
  const canonicalMatch = headContent.match(
    /<link rel="canonical" href="(.*?)"/
  );
  const canonical = canonicalMatch
    ? canonicalMatch[1].replace(
        "https://admin.sportzwiki.com",
        "https://sportzwiki.com"
      )
    : null;

  const categoryData = await fetchCategoryDataBySlug(slug2);
  const totalPages = Math.ceil((categoryData[0]?.count || 0) / DATA_PER_PAGE);

  const iconsOther = [];

  if (currentPage !== 1) {
    iconsOther.push({
      rel: "prev",
      url: `https://www.sportzwiki.com/${category}/${slug}/${slug2}/page/${
        currentPage - 1
      }`,
    });
  }

  if (currentPage !== totalPages) {
    iconsOther.push({
      rel: "next",
      url: `https://www.sportzwiki.com/${category}/${slug}/${slug2}/page/${
        currentPage + 1
      }`,
    });
  }

  return {
    title: metaTitle,
    description: metaDescription,
    icons: {
      other: iconsOther,
    },
    robots: {
      index: index,
      follow: follow,
      "max-video-preview": maxVideoPreview,
      "max-image-preview": maxImagePreview,
      "max-snippet": maxSnippet,
    },
    alternates: {
      canonical: canonical,
    },
  };
}

// export async function generateMetadata({ params }) {
//   try {
//     const DATA_PER_PAGE = 48;
//     const category = params.category;
//     let { "page-no": currentPage = "1" } = params;
//     currentPage = parseInt(currentPage);

//     const metaData = await fetchMetaData(category);
//     const headContent = metaData.head;

//     // Extract meta title
//     const titleMatch = headContent.match(/<title>(.*?)<\/title>/);
//     const metaTitle = titleMatch ? titleMatch[1] : null;

//     // Extract meta description
//     const descriptionMatch = headContent.match(
//       /<meta name="description" content="(.*?)"/
//     );
//     const metaDescription = descriptionMatch ? descriptionMatch[1] : null;

//     // Extract robots
//     const robotsMatch = headContent.match(
//       /<meta name="robots" content="(.*?)"/
//     );
//     const robots = robotsMatch ? robotsMatch[1] : null;

//     // Split the content by commas
//     const robotsProperties = robots
//       .split(",")
//       .map((property) => property.trim());

//     // Access each property separately
//     const follow = robotsProperties.includes("follow") ? true : false;
//     const index = robotsProperties.includes("index") ? true : false;
//     const maxSnippet = robotsProperties.find((property) =>
//       property.startsWith("max-snippet:")
//     );
//     const maxVideoPreview = robotsProperties.find((property) =>
//       property.startsWith("max-video-preview:")
//     );
//     const maxImagePreview = robotsProperties.find((property) =>
//       property.startsWith("max-image-preview:")
//     );

//     // Extract canonical
//     const canonicalMatch = headContent.match(
//       /<link rel="canonical" href="(.*?)"/
//     );
//     const canonical = canonicalMatch
//       ? canonicalMatch[1].replace(
//           "https://swdupli.sportzwiki.com",
//           "https://sportzwiki.com"
//         )
//       : null;

//     const categoryData = await fetchCategoryDataBySlug(category);
//     // console.log(categoryData,'categoryDatacategoryData')
//     const totalPages = Math.ceil((categoryData[0]?.count || 0) / DATA_PER_PAGE);

//     const iconsOther = [];

//     if (currentPage !== 1) {
//       iconsOther.push({
//         rel: "prev",
//         url: `https://www.sportzwiki.com/${category}/page/${currentPage - 1}`,
//       });
//     }

//     if (currentPage !== totalPages) {
//       iconsOther.push({
//         rel: "next",
//         url: `https://www.sportzwiki.com/${category}/page/${currentPage + 1}`,
//       });
//     }

//     return {
//       title: metaTitle,
//       description: metaDescription,
//       icons: {
//         other: iconsOther,
//       },
//       robots: {
//         index: index,
//         follow: follow,
//         "max-video-preview": maxVideoPreview,
//         "max-image-preview": maxImagePreview,
//         "max-snippet": maxSnippet,
//       },
//       alternates: {
//         canonical: canonical,
//       },
//     };
//   } catch (error) {
//     console.error("Error generating metadata:", error);
//     throw new Error("Failed to generate metadata. Please try again later.");
//   }
// }

const CategoryPosts = async ({ params, searchParams }) => {
  const slug = params.slug2;
  console.log(slug, "categorycategorycategory");
  //   let { "page-no": currentPage = 1 } = params;
  // const { Currentpage = 1 } = params;
  // const categoryData = await fetchCategoryDataBySlug(category);
  const categoryData = await fetchCategoryDataBySlug(slug);
  // console.log(categoryData[0]?.name,'categoryDatacategoryDatacategoryData')
  let currentPage = "1";

  const breadcrumbs = [
    {
      name: "Home",
      url: `/`,
    },
    {
      name: `${decodeURIComponent(params?.category)}`,
      url: `/${params?.category}`,
    },
    {
      name: `${decodeURIComponent(params?.slug)}`,
      url: `/${params?.category}/${params?.slug}`,
    },
    {
      name: `${decodeURIComponent(params?.slug2)}`,
      // url: `/${category}`,
    },
  ];

  // let currentPage = "1";

  // let { "page-no": currentPage = "1" } = params;let currentPage = "1"; // default value

  // if (params.currentPage && params.currentPage["page-no"]) {
  //   currentPage = params.currentPage["page-no"];
  // }

  currentPage = parseInt(currentPage, 10);

  // if (isNaN(currentPage) || currentPage <= 0) {
  //   currentPage = 1;
  // }

  console.log(currentPage, "bdsjgbjhbvjhbdeibvejk");

  const dataPerPage = 48;

  const totalPages = Math.ceil((categoryData[0]?.count || 0) / dataPerPage);
  const pagesToShow = 5;
  const delta = Math.floor(pagesToShow / 2);

  let startPage = Math.max(currentPage - delta, 1);
  let endPage = Math.min(currentPage + delta, totalPages);

  if (startPage > 2) {
    startPage += 1;
  }
  if (endPage < totalPages - 1) {
    endPage -= 1;
  }

  const range = (start, end) =>
    Array.from({ length: end - start + 1 }, (_, i) => i + start);

  const pageRange = range(startPage, endPage);

  const categoryPosts = await fetchPostsByCategoryId(
    categoryData[0]?.id,
    currentPage
  );

  // console.log('hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')

  // console.log(categoryPosts[0]?.primary_category,'categoryPostscategoryPosts')

  return (
    <>
      <div className={styles.container}>
        <BreadcrumbJsonLd
          useAppDir={true}
          itemListElements={[
            {
              position: 1,
              name: "Home",
              item: `${site_url}/`,
            },
            {
              position: 2,
              name: `${slug}`,
              item: `${site_url}/${slug}/`,
            },
          ]}
        />

        <OrganizationJsonLd
          useAppDir={true}
          type="Corporation"
          id="SportzWiki.com"
          // logo="https://www.example.com/photos/logo.jpg"
          legalName="SportzWiki.com"
          name="SportzWiki Media"
          address={{
            streetAddress: "palam vihar",
            addressLocality: "gurgaon",
            addressRegion: "HR",
            postalCode: "122017",
            addressCountry: "IN",
          }}
          contactPoint={[
            {
              telephone: "0124-4284294",
              contactType: "customer service",
              email: "enquiry@sportzwiki.com",
              areaServed: "IN",
              availableLanguage: ["English"],
            },
            // {
            //   telephone: "+1-877-746-0909",
            //   contactType: "customer service",
            //   email: "servicecustomer@email.com",
            //   contactOption: "TollFree",
            //   availableLanguage: "English",
            // },
            // {
            //   telephone: "+1-877-453-1304",
            //   contactType: "technical support",
            //   contactOption: "TollFree",
            //   areaServed: ["US", "CA"],
            //   availableLanguage: ["English", "French"],
            // },
          ]}
          // sameAs={["https://www.orange-fox.com"]}
          url="https://www.sportzwiki.com/"
        />

        <div className={styles.CategoryPosts}>
          <div
            style={{ marginTop: "6rem" }}
            className={styles.categoryTitleDescription}
          >
            <Breadcrumb breadcrumbsObj={breadcrumbs} />
            {/* <h1 className={styles.categoryTitle}>
              {decodeURIComponent(params.category)} News
            </h1> */}
            <h1 className={styles.categoryTitle}>
              {capitalizeFirstLetter(
                categoryData[0]?.name || decodeURIComponent(params.slug2)
              )}
              {/* <span> </span>
              News */}
            </h1>

            {/* <p className={styles.catDescription}>
            {categoryData[0]?.description}
          </p> */}
          </div>

          <div className={styles.newsCardsDisplay}>
            {!categoryPosts?.length && (
              <div className="not">
                <h1 style={{ color: "red" }}> No Content in this category</h1>
              </div>
            )}

            {Array.isArray(categoryPosts) &&
              categoryPosts?.map((post, index) => (
                <div className="card" key={index}>
                  <a
                    href={`/${post?.primary_category_slug || "news"}/${
                      post?.slug
                    }`}
                  >
                    <NewsCard
                      id={post?.id}
                      title={post?.title.rendered}
                      content={post?.content.rendered}
                      // date={new Date(post?.date).toLocaleString("en-us")}
                      date={post?.modified}
                      featuredMedia={post?.featured_image_url}
                    />
                  </a>
                </div>
              ))}
          </div>
        </div>

        <div className={styles.paginationContainer}>
          {currentPage > 1 && (
            <a
              className={styles.nextPrevBtn}
              aria-label="Previous page"
              href={`/${params.category}/${params.slug}/${slug}/page/${
                currentPage - 1
              }`}
            >
              Previous
            </a>
          )}
          {startPage > 2 && (
            <>
              <a href={`/${params.category}/${params.slug}/${slug}/page/1`}>
                1
              </a>
              <span aria-hidden="true">...</span>
            </>
          )}
          {pageRange.map((page) => (
            <a
              className={page === currentPage ? styles.activePage : ""}
              key={page}
              href={`/${params.category}/${params.slug}/${slug}/page/${page}`}
            >
              {page}
            </a>
          ))}
          {endPage < totalPages - 1 && (
            <>
              <span aria-hidden="true">...</span>
              <a
                href={`/${params.category}/${params.slug}/${slug}/page/${totalPages}`}
              >
                {totalPages}
              </a>
            </>
          )}
          {currentPage < totalPages && (
            <a
              aria-label="Next page"
              href={`/${params.category}/${params.slug}/${slug}/page/${
                currentPage + 1
              }`}
              className={styles.nextPrevBtn}
            >
              Next
            </a>
          )}
        </div>

        <h2 style={{ marginTop: "3rem" }}>
          Latest {decodeURIComponent(params.slug2)} News
        </h2>
        <div
          className={styles.catDescription}
          dangerouslySetInnerHTML={{ __html: categoryData[0]?.description }}
        />
        {/* <FaqLive /> */}
      </div>
    </>
  );
};

export default CategoryPosts;
