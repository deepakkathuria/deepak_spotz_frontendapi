import React from "react";
import styles from "./CategoryPosts.module.css";
import NewsCard from "@/components/common/NewsCard";
import axios from "axios";
import Link from "next/link";
import Breadcrumb from "@/components/common/Breadcrumb";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const site_url = process.env.NEXT_PUBLIC_SITE_URL;

import { BreadcrumbJsonLd } from "next-seo";
import { OrganizationJsonLd } from "next-seo";

export async function generateMetadata({ params }) {
  const category = params.category;
  return {
    title: `SportzWiki | ${decodeURIComponent(category)}`,
    description: "this is a comment",
  };
}

const CategoryPosts = async ({ params }) => {
  const category = params.category;

  const breadcrumbs = [
    {
      name: "HOME",
      url: { site_url },
    },
    // {
    //   name: `WIKI`,
    //   url: `/`,
    // },
    {
      name: `${decodeURIComponent(category).toUpperCase().substring(0, 40)}...`,
      url: `/${category}`,
    },
  ];

  const data = await axios.get(
    `${base_url}/getpostsbycategoryname?name=${category}&page=1&limit=100`
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
          // {
          //   position: 2,
          //   name: "WIKI",
          //   item: `${site_url}/`,
          // },
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
        </div>

        <div className={styles.newsCardsDisplay}>
          {data.data?.map((post) => (
            <div className="card" key={post.ID}>
              <Link href={`/${category}/${post.post_name}`}>
                <NewsCard
                  title={post.post_title}
                  content={post.post_content}
                  date={new Date(post.post_modified).toLocaleString()}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPosts;
