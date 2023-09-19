import React from "react";
import styles from "../styles/NewsSection.module.css";
import NewsCardLatest from "./NewsCardLatest";
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const getCategoryById = async (id) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/categories/${id}
  `,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );
  return res.json();
};

const fetchLatestNews = async (postRequired) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/posts?per_page=${postRequired}`,
    {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );

  const posts = await res.json();

  const categoriesPromises = posts.map(async (post) => {
    const categoryRes = await fetch(
      `${BASE_URL_WP}wp-json/wp/v2/categories?include=${post.categories.join(
        ","
      )}`,
      {
        method: "GET",
        cache: "no-store",
        headers: {
          Authorization: `Basic ${base64Credentials}`,
        },
      }
    );
    post.categoriesDetail = await categoryRes.json();
    return post;
  });

  const detailedPosts = await Promise.all(categoriesPromises);

  return detailedPosts;
};

const NewsSection = async (props) => {
  const data = await fetchLatestNews(9);

  return (
    <>
      <div className={styles.newsSectionContainer}>
        <div className={styles.newsSectionHeading}>
          <h3>LATEST</h3>
        </div>
        <div className={styles.newsCardsDiv}>
          {data?.map((item, index) => {
            const slug1 = item.categoriesDetail?.[0]?.slug || "news";

            return (
              <div key={index}>
                <a
                  href={`/${item.primary_category_slug || slug1}/${item?.slug}/`}
                >
                  <NewsCardLatest
                    title={item?.title?.rendered}
                    id={item?.id}
                    // date={new Date(item?.post_modified_gmt)?.toLocaleString()}
                    date={item?.date ? item.date : ""}
                    content={item?.content?.rendered}
                    featuredMedia={item?.featured_image_url}
                  />
                </a>
              </div>
            );
          })}
        </div>
        {/* <div className={styles.readMoreLabel}>
          <a href="/news/">Read More</a>
        </div> */}
      </div>
    </>
  );
};

export default NewsSection;
