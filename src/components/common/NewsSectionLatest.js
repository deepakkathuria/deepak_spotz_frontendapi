// "use client";
import React from "react";
import styles from "../styles/NewsSection.module.css";
import NewsCardLatest from "./NewsCardLatest";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const NewsSection = async (props) => {
  try {
    const response = await fetch(`${base_url}/getlatestposts?limit=9&page=1`);
    // console.log(response, "response");
    if (response.ok) {
      var data = await response.json();
    } else {
      console.log("Error: " + response.status);
    }
  } catch (e) {
    console.log(e.message);
  }

  // console.log(data, "dataaalatestttt");

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
                <a
                  href={`${item?.parent_category_slugs ?? "news"}/${
                    item?.post_name
                  }`}
                >
                  <NewsCardLatest
                    title={item?.post_title}
                    id={item?.ID}
                    // date={new Date(item?.post_modified_gmt)?.toLocaleString()}
                    date={item?.post_modified_gmt ? item.post_modified_gmt : ""}
                    content={item?.post_content}
                    // slug={item.name}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.readMoreLabel}>
          <a href="/cricket">Read More</a>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
