// "use client"
import React from "react";
import styles from "../../../../[category]/CategoryPosts.module.css";
import NewsCard from "../../../../../components/common/NewsCard";
// import axios from "axios";
import Link from "next/link";
import Breadcrumb from "../../../../../components/common/Breadcrumb";
const site_url = process.env.SITE_URL;
const base_url = process.env.BASE_URL_DO;
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

import { BreadcrumbJsonLd } from "next-seo";
import { OrganizationJsonLd } from "next-seo";
// import slugify from "slugify";

const fetchMetaData = async (tag) => {
  const res = await fetch(
    `${BASE_URL_WP}/wp-json/rankmath/v1/getHead?url=${BASE_URL_WP}/wiki/${tag}`,
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

const fetchTagIdByTagSlug = async (tagSlug) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/tags?slug=${tagSlug}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    },
    { cache: "no-store" }
  );
  const tagID = await res.json();
  return tagID;
};

const fetchPostsByTagId = async (tagId, currentPage) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/posts?tags=${tagId}&page=${currentPage}&per_page=48`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    },
    { cache: "no-store" }
  );
  const posts = await res.json();
  return posts;
};

// Fetch Data tag page
// const fetchPosts = async (tag, dataPerPage) => {
//   const res = await fetch(
//     `${base_url}/getpostbytagslug?slug=${tag}&page=1&limit=${dataPerPage}`,
//     { cache: "no-store" }
//   );
//   return await res.json();
// };

// const fetchTotalNoOfPosts = async (tag) => {
//   const res = await fetch(`${base_url}/gettotalpostbytagslug?slug=${tag}`, {
//     cache: "no-store",
//   });
//   const res2 = await res.json();
//   return parseInt(res2.count);
// };
// Fetch Data tag page

// export async function generateMetadata({ params }) {
//   const { tag } = params;
//   return {
//     title: `SportzWiki | ${decodeURIComponent(tag)}`,
//     description:
//       "Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.",
//   };
// }

// export async function generateMetadata({ params }) {
//   const DATA_PER_PAGE = 48;
//   const { tag } = params;
//   let { "page-no": currentPage = "1" } = params;
//   currentPage = parseInt(currentPage);

//   const tagData = await fetchTagIdByTagSlug(tag);
//   const totalPages = Math.ceil((tagData[0]?.count || 0) / DATA_PER_PAGE);

//   const metaData = await fetchMetaData(tag);
//   // console.log(metaData,'metaDatametaDatametaDatametaData')

//   const headContent = metaData.head;
//   // Extract meta title
//   const titleMatch = headContent.match(/<title>(.*?)<\/title>/);
//   const metaTitle = titleMatch ? titleMatch[1] : null;

//   // Extract meta description
//   const descriptionMatch = headContent.match(
//     /<meta name="description" content="(.*?)"/
//   );
//   const metaDescription = descriptionMatch ? descriptionMatch[1] : null;

//   // Extract robots
//   const robotsMatch = headContent.match(/<meta name="robots" content="(.*?)"/);
//   const robots = robotsMatch ? robotsMatch[1] : null;

//   // Split the content by commas
//   const robotsProperties = robots.split(",").map((property) => property.trim());

//   // Access each property separately
//   const follow = robotsProperties.includes("follow") ? true : false;
//   const index = robotsProperties.includes("index") ? true : false;
//   const maxSnippet = robotsProperties.find((property) =>
//     property.startsWith("max-snippet:")
//   );
//   const maxVideoPreview = robotsProperties.find((property) =>
//     property.startsWith("max-video-preview:")
//   );
//   const maxImagePreview = robotsProperties.find((property) =>
//     property.startsWith("max-image-preview:")
//   );

//   // Extract canonical
//   const canonicalMatch = headContent.match(
//     /<link rel="canonical" href="(.*?)"/
//   );
//   const canonical = canonicalMatch
//     ? canonicalMatch[1].replace(
//         "https://swdupli.sportzwiki.com",
//         "https://sportzwiki.com"
//       )
//     : null;

//   const iconsOther = [];

//   if (currentPage !== 1) {
//     iconsOther.push({
//       rel: "prev",
//       url: `https://www.sportzwiki.com/wiki/${tag}/page/${currentPage - 1}`,
//     });
//   }

//   if (currentPage !== totalPages) {
//     iconsOther.push({
//       rel: "next",
//       url: `https://www.sportzwiki.com/wiki/${tag}/page/${currentPage + 1}`,
//     });
//   }

//   return {
//     title: metaTitle,
//     description: metaDescription,
//     icons: {
//       other: iconsOther,
//     },
//     robots: {
//       index: index,
//       follow: follow,
//       "max-video-preview": maxVideoPreview,
//       "max-image-preview": maxImagePreview,
//       "max-snippet": maxSnippet,
//     },
//     alternates: {
//       canonical: canonical,
//     },
//   };
// }

export async function generateMetadata({ params }) {
  try {
    const DATA_PER_PAGE = 48;
    const { tag } = params;
    let { "page-no": currentPage = "1" } = params;
    currentPage = parseInt(currentPage);

    const tagData = await fetchTagIdByTagSlug(tag);
    const totalPages = Math.ceil((tagData[0]?.count || 0) / DATA_PER_PAGE);

    const metaData = await fetchMetaData(tag);

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
    const robotsMatch = headContent.match(
      /<meta name="robots" content="(.*?)"/
    );
    const robots = robotsMatch ? robotsMatch[1] : null;

    // Split the content by commas
    const robotsProperties = robots
      .split(",")
      .map((property) => property.trim());

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
          "https://swdupli.sportzwiki.com",
          "https://sportzwiki.com"
        )
      : null;

    const iconsOther = [];

    if (currentPage !== 1) {
      iconsOther.push({
        rel: "prev",
        url: `https://www.sportzwiki.com/wiki/${tag}/page/${currentPage - 1}`,
      });
    }

    if (currentPage !== totalPages) {
      iconsOther.push({
        rel: "next",
        url: `https://www.sportzwiki.com/wiki/${tag}/page/${currentPage + 1}`,
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
  } catch (error) {
    console.error("Error generating metadata:", error);
    // throw new Error("Failed to generate metadata. Please try again later.");
  }
}

const CategoryPosts = async ({ params, searchParams }) => {
  const { tag } = params;

  const tagId = await fetchTagIdByTagSlug(tag);
  const tagData = await fetchTagIdByTagSlug(tag);
  // const totalTags = tagData[0].count;
  // console.log(tagId[0]?.name,'tagiddddddddd')

  let { "page-no": currentPage = "1" } = params;
  currentPage = parseInt(currentPage, 10);

  if (isNaN(currentPage) || currentPage <= 0) {
    currentPage = 1;
  }

  const dataPerPage = 48;

  const totalPages = Math.ceil((tagData[0]?.count || 0) / dataPerPage);
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

  const PostsOfTag = await fetchPostsByTagId(tagId[0].id, currentPage);

  const breadcrumbs = [
    {
      name: "Home",
      url: { site_url },
    },
    {
      name: `WIKI`,
      url: `/`,
    },
    {
      name: `${decodeURIComponent(tag)}`,
      // url: `/${tag}`,
    },
  ];

  return (
    <>
      {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}

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
            name: "WIKI",
            item: `${site_url}/`,
          },
          {
            position: 3,
            name: `${tag}`,
            item: `${site_url}/wiki/${tag}/`,
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
          streetAddress: "Palam vihar",
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

      {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      <div className={styles.container}>
        <div className={styles.CategoryPosts}>
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
          <div className={styles.categoryTitleDescription}>
            <h1 className={styles.categoryTitle}>
              {/* {decodeURIComponent(params.tag)} */}
              {tagId[0]?.name}
            </h1>
          </div>

          <div className={styles.newsCardsDisplay}>
            {PostsOfTag?.map((post) => (
              <div className="card" key={post.ID}>
                {/* {console.log(post.featured_image_url, "featuresdddddd")} */}
                <a href={`/${post.primary_category_slug}/${post.slug}`}>
                  <NewsCard
                    title={post?.title?.rendered}
                    content={post?.content?.rendered}
                    date={new Date(post?.date).toLocaleString("en-us")}
                    featuredMedia={post?.featured_image_url}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.paginationContainer}>
          {currentPage > 1 && (
            <Link
              className={styles.nextPrevBtn}
              aria-label="Previous page"
              href={`/wiki/${tag}/page/${currentPage - 1}`}
            >
              Previous
            </Link>
          )}
          {startPage > 2 && (
            <>
              <Link href={`/wiki/${tag}/page/1`}>1</Link>
              <span aria-hidden="true">...</span>
            </>
          )}
          {pageRange.map((page) => (
            <Link
              className={page === currentPage ? styles.activePage : ""}
              key={page}
              href={`/wiki/${tag}/page/${page}`}
            >
              {page}
            </Link>
          ))}
          {endPage < totalPages - 1 && (
            <>
              <span aria-hidden="true">...</span>
              <Link href={`/wiki/${tag}/page/${totalPages}`}>{totalPages}</Link>
            </>
          )}
          {currentPage < totalPages && (
            <Link
              aria-label="Next page"
              href={`/wiki/${tag}/page/${currentPage + 1}`}
              className={styles.nextPrevBtn}
            >
              Next
            </Link>
          )}
        </div>

        {/* <div className={styles.paginationContainer}>
          {currentPage > 1 && (
            <>
              <a href={`/${category}`}>{"<<"}</a>
            </>
          )}

          {pageNumbers &&
            pageNumbers.map((page) => (
              <Link
                key={page}
                href={`/${tag}?page=${page}`}
                className={page === currentPage ? styles.activeLink : ""}
              >
                {page}
              </Link>
            ))}

          {currentPage < totalPages && (
            <>
              <a href={`/${tag}?page=${currentPage + 1}`}>{">>"}</a>
            </>
          )}
        </div> */}
      </div>
    </>
  );
};

export default CategoryPosts;
