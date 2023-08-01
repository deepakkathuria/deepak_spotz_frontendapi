import React from "react";
import styles from "./CategoryPosts.module.css";
import NewsCard from "@/components/common/NewsCard";
import axios from "axios";
import Breadcrumb from "@/components/common/Breadcrumb";
// const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const site_url = process.env.NEXT_PUBLIC_SITE_URL;
import OrganisationLd from "@/json-ld/OrganisationLd";

import { BreadcrumbJsonLd } from "next-seo";
import { OrganizationJsonLd } from "next-seo";

const fetchPostsByCategoryId = async (categoryId, currentPage) => {
  const res = await fetch(
    `https://demo2.sportzwiki.com/wp-json/wp/v2/posts?categories=${categoryId}&page=${currentPage}&per_page=48`,
    { cache: "no-store" }
  );
  const posts = await res.json();
  return posts;
};

const fetchCategoryDataBySlug = async (categorySlug) => {
  const res = await fetch(
    `https://demo2.sportzwiki.com/wp-json/wp/v2/categories?slug=${categorySlug}`,
    { cache: "no-store" }
  );
  const categoryData = await res.json();
  return categoryData;
};

export async function generateMetadata({ params }) {
  const category = params.category;
  return {
    title: `SportzWiki | ${decodeURIComponent(category)}`,
    description: "this is a comment",
  };
}

const CategoryPosts = async ({ params, searchParams }) => {
  const category = params.category;
  // const { Currentpage = 1 } = params;
  const categoryData = await fetchCategoryDataBySlug(category);
  // console.log(categoryData, "categoryDatabsdjbhvsjdkbhjh");
  // console.log(categoryPosts, "categoryPosts");

  const breadcrumbs = [
    {
      name: "HOME",
      url: { site_url },
    },
    {
      name: `${decodeURIComponent(category).toUpperCase().substring(0, 40)}...`,
      url: `/${category}`,
    },
  ];

  const dataPerPage = 48;

  const totalPages = Math.ceil(categoryData[0].count / dataPerPage);

  let currentPage = 1;

  if (Number(searchParams.page) >= 1) {
    currentPage = Number(searchParams.page);
  }
  console.log(currentPage, "countjbkbdfb");

  let offset = (currentPage - 1) * dataPerPage;

  let pageNumbers = [];
  const start = Math.max(currentPage - 4, 1);
  const end = Math.min(currentPage + 4, totalPages);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  // Adjust the range if currentPage is close to the start or end

  // pagination logic OLD
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
  const categoryPosts = await fetchPostsByCategoryId(
    categoryData[0]?.id,
    currentPage
  );

  return (
    <>
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
            name: `${category}`,
            item: `${site_url}/${category}/`,
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

      <div className={styles.CategoryPosts}>
        <div className={styles.categoryTitleDescription}>
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
          <h1 className={styles.categoryTitle}>
            {decodeURIComponent(params.category).toUpperCase()}
          </h1>
          <p className={styles.catDescription}>{categoryData[0].description}</p>
        </div>

        <div className={styles.newsCardsDisplay}>
          {!categoryPosts?.length && (
            <div className="not">
              <h1 style={{ color: "red" }}> No Content in this category</h1>
            </div>
          )}

          {Array.isArray(categoryPosts) &&
            categoryPosts?.map((post) => (
              <div className="card" key={post.ID}>
                <a href={`/${category}/${post?.slug}`}>
                  <NewsCard
                    id={post?.id}
                    title={post?.title.rendered}
                    content={post?.content.rendered}
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
            <a
              key={page}
              href={`/${category}?page=${page}`}
              className={page === currentPage ? styles.activeLink : ""}
            >
              {page}
            </a>
          ))}

        {currentPage < totalPages && (
          <>
            <a href={`/${category}?page=${currentPage + 1}`}>{">>"}</a>
          </>
        )}
      </div>
    </>
  );
};

export default CategoryPosts;
