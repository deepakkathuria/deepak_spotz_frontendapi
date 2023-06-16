// "use client"

import React from "react";
import styles from "../../[category]/CategoryPosts.module.css";
import NewsCard from "../../../components/common/NewsCard";
import axios from "axios";
import Link from "next/link";
// import CategoryDescriptionDisplay from "@/components/common/categoryDescriptionDisplay";
import Breadcrumb from "@/components/common/Breadcrumb";
const site_url = process.env.NEXT_PUBLIC_SITE_URL;
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

import { BreadcrumbJsonLd } from "next-seo";
import { OrganizationJsonLd } from "next-seo";

export async function generateMetadata({ params }) {
  const { tag } = params;
  return {
    title: `SportzWiki | ${decodeURIComponent(tag)}`,
    description: "this is a comment",
  };
}

const CategoryPosts = async ({ params, searchParams }) => {
  const { tag } = params;

  const breadcrumbs = [
    {
      name: "HOME",
      url: { site_url },
    },
    {
      name: `WIKI`,
      url: `/`,
    },
    {
      name: `${decodeURIComponent(tag).toUpperCase().substring(0, 40)}...`,
      url: `/${tag}`,
    },
  ];

  const totalData = await axios.get(
    `${base_url}/gettotalpostbytagslug?slug=${tag}`
  );

  const dataPerPage = 48;

  const totalPages = Math.ceil(totalData?.data?.count / dataPerPage);

  console.log(totalPages, "totalData");

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }

  const data = await axios.get(
    `${base_url}getpostbytagslug?slug=cricket&page=1&limit=100`
  );

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
            name: "HOME",
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

      <div className={styles.CategoryPosts}>
        <Breadcrumb breadcrumbsObj={breadcrumbs} />
        <div className={styles.categoryTitleDescription}>
          <h1 className={styles.categoryTitle}>
            {decodeURIComponent(params.tag)?.toUpperCase()}
          </h1>
        </div>

        <div className={styles.newsCardsDisplay}>
          {data.data?.map((post) => (
            <div className="card" key={post.ID}>
              <a href={`/${post.category}/${post.post_name}`}>
                <NewsCard
                  title={post.post_title}
                  content={post.post_content}
                  date={new Date(post?.post_modified).toLocaleString()}
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
    </>
  );
};

export default CategoryPosts;
