// "use client"
import React from "react";
import styles from "../../[category]/CategoryPosts.module.css";
import NewsCard from "../../../components/common/NewsCard";
import axios from "axios";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
const site_url = process.env.NEXT_PUBLIC_SITE_URL;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const NEXT_PUBLIC_BASE_URL_WP = process.env.NEXT_PUBLIC_BASE_URL_WP;
const NEXT_PUBLIC_WP_API_USERNAME = process.env.NEXT_PUBLIC_WP_API_USERNAME;
const NEXT_PUBLIC_WP_API_PASSWORD = process.env.NEXT_PUBLIC_WP_API_PASSWORD;

const credentials = `${NEXT_PUBLIC_WP_API_USERNAME}:${NEXT_PUBLIC_WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

import { BreadcrumbJsonLd } from "next-seo";
import { OrganizationJsonLd } from "next-seo";

const fetchTagIdByTagSlug = async (tagSlug) => {
  const res = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/tags?slug=${tagSlug}`,
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
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/posts?tags=${tagId}&page=${currentPage}&per_page=48`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    },
    { cache: "no-store" }
  );
  const posts = await res.json();
  // console.log(tagId,'tagidjhabjhbsj')
  // console.log(posts, "reshjvkhdvkhfvkjhd");
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

export async function generateMetadata({ params }) {
  const { tag } = params;
  return {
    title: `SportzWiki | ${decodeURIComponent(tag)}`,
    description: "this is a comment",
  };
}

const CategoryPosts = async ({ params, searchParams }) => {
  const { tag } = params;

  const tagId = await fetchTagIdByTagSlug(tag);
  const tagData = await fetchTagIdByTagSlug(tag);
  const totalTags = tagData[0].count;
  // console.log(totalTags, "taggggghjvdvhjkjvhks");
  // console.log(`tagId: ${tagId} avskhvsjfghv`);

  // console.log(PostsOfTag, "postsOfTaghjhavsdjhvjhvsj");

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

  // const totalData = await axios.get(
  //   `${base_url}/gettotalpostbytagslug?slug=${tag}`
  // );
  const totalData = totalTags;

  // console.log(totalData, " : total data, ", "type is : ", typeof totalData);

  const dataPerPage = 48;

  const totalPages = Math.ceil(totalData?.data?.count / dataPerPage);

  // console.log(totalPages, "totalData");

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }

  const PostsOfTag = await fetchPostsByTagId(tagId[0].id, currentPage);

  // const data = await axios.get(
  //   `${base_url}getpostbytagslug?slug=cricket&page=1&limit=100`
  // );

  // const data = await fetchPosts(tag, dataPerPage);
  // console.log(data, "cricket");

  let pageNumbers = [];
  const start = Math.max(currentPage - 4, 1);
  const end = Math.min(currentPage + 4, totalPages);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  // Adjust the range if currentPage is close to the start or end
  if (start === 1 && end < 9) {
    const diff = 9 - end;
    const additionalNumbers = Math.min(diff, totalPages - end);
    for (let i = end + 1; i <= end + additionalNumbers; i++) {
      pageNumbers.push(i);
    }
  } else if (end === totalPages && start > totalPages - 8) {
    const diff = start - (totalPages - 8);
    const additionalNumbers = Math.min(diff, start - 1);
    for (let i = start - 1; i >= start - additionalNumbers; i--) {
      pageNumbers.unshift(i);
    }
  }

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
        logo="https://www.example.com/photos/logo.jpg"
        legalName="SportzWiki.com"
        name="SportzWiki Media"
        address={{
          streetAddress: "91 SpringBoard",
          addressLocality: "gurgaon",
          addressRegion: "HR",
          postalCode: "127021",
          addressCountry: "IN",
        }}
        contactPoint={[
          {
            telephone: "+1-401-555-1212",
            contactType: "customer service",
            email: "customerservice@email.com",
            areaServed: "US",
            availableLanguage: ["English", "Spanish", "French"],
          },
          {
            telephone: "+1-877-746-0909",
            contactType: "customer service",
            email: "servicecustomer@email.com",
            contactOption: "TollFree",
            availableLanguage: "English",
          },
          {
            telephone: "+1-877-453-1304",
            contactType: "technical support",
            contactOption: "TollFree",
            areaServed: ["US", "CA"],
            availableLanguage: ["English", "French"],
          },
        ]}
        sameAs={["https://www.orange-fox.com"]}
        url="https://www.purpule-fox.io/"
      />

      {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
      <div className={styles.container}>
        <div className={styles.CategoryPosts}>
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
          <div className={styles.categoryTitleDescription}>
            <h1 className={styles.categoryTitle}>
              {decodeURIComponent(params.tag)}
            </h1>
          </div>

          <div className={styles.newsCardsDisplay}>
            {PostsOfTag?.map((post) => (
              <div className="card" key={post.ID}>
                {/* {console.log(post.featured_image_url, "featuresdddddd")} */}
                <a href={`/${post.category}/${post.slug}`}>
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
        </div>
      </div>
    </>
  );
};

export default CategoryPosts;
