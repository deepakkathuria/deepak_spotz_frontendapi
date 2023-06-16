import React from "react";
import styles from "../styles/NewsSection.module.css";
// import { GiCricketBat } from "react-icons/gi";
import ButtonTab from "./ButtonTab";
import NewsCard from "./NewsCard";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const NewsSection = async (props) => {
  try {
    var response = await fetch(`${base_url}/getlatestposts?limit=9&page=1`, {
      next: { revalidate: 1 },
    });
    if (response.ok) {
      var data = await response.json();
    } else {
      console.log("Error: " + response.status);
    }
  } catch (e) {
    console.log(e.message);
  }

  return (
    <>
      <div className={styles.newsSectionContainer}>
        <div className={styles.newsSectionHeading}>
          <h3>LATEST</h3>
        </div>
        <div className={styles.newsCardsDiv}>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                <a href={`${props.slug}/${item.post_name}`}>
                  <NewsCard
                    title={item.post_title}
                    date={new Date(item.post_modified_gmt).toLocaleString()}
                    content={item.post_content}
                    // slug={item.name}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.readMoreLabel}>
          <a href={`/${props.slug}`}>Read More</a>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
