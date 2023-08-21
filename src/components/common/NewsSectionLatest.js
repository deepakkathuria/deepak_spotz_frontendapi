// "use client";
import React from "react";
import styles from "../styles/NewsSection.module.css";
import NewsCardLatest from "./NewsCardLatest";
const NEXT_PUBLIC_BASE_URL_WP = process.env.NEXT_PUBLIC_BASE_URL_WP;
// const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const NEXT_PUBLIC_WP_API_USERNAME = process.env.NEXT_PUBLIC_WP_API_USERNAME;
const NEXT_PUBLIC_WP_API_PASSWORD = process.env.NEXT_PUBLIC_WP_API_PASSWORD;

const credentials = `${NEXT_PUBLIC_WP_API_USERNAME}:${NEXT_PUBLIC_WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const fetchLatestNews = async (postRequired) => {
  const res = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/posts?per_page=${postRequired}`,
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

const NewsSection = async (props) => {
  // try {
  //   const response = await fetch(`${base_url}/getlatestposts?limit=9&page=1`);\
  //   if (response.ok) {
  //     var data = await response.json();
  //   } else {
  //     console.log("Error: " + response.status);
  //   }
  // } catch (e) {
  //   console.log(e.message);
  // }

  // console.log(data, "dataaalatestttt");
  const data = await fetchLatestNews(9);
  // console.log(data, "data123");

  return (
    <>
      <div className={styles.newsSectionContainer}>
        <div className={styles.newsSectionHeading}>
          <h3>LATEST</h3>
        </div>
        <div className={styles.newsCardsDiv}>
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <a href={`${item?.news ?? "news"}/${item?.slug}`}>
                  <NewsCardLatest
                    title={item?.title?.rendered}
                    id={item?.id}
                    // date={new Date(item?.post_modified_gmt)?.toLocaleString()}
                    date={item?.date_gmt ? item.date_gmt : ""}
                    content={item?.content?.rendered}
                    featuredMedia={item?.featured_image_url}

                    // slug={item.name}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.readMoreLabel}>
          <a href="/news">Read More</a>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
