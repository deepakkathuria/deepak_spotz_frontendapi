import React from "react";
import styles from "../styles/NewsSection.module.css";
// import { GiCricketBat } from "react-icons/gi";
import ButtonTab from "./ButtonTab";
import NewsCard from "./NewsCard";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.baseUrl;

const NewsSection = async (props) => {
  try {
    var data = await axios.get(
      `${base_url}/getPostByCategorySlug?slug=${props.slug}&page=1&limit=9`
    );
  } catch (e) {
    console.log(e.message);
  }

  return (
    <>
      <div className={styles.newsSectionContainer}>
        <div className={styles.newsSectionHeading}>
          <h3>{props.name}</h3>
          {/* <GiCricketBat color="#000" /> */}
        </div>
        {/* <div className={styles.newsSectionTabs}>
          <ButtonTab title="Latest News" />
          <ButtonTab title="Fantasy Tips" selected="true" />
        </div> */}
        <div className={styles.newsCardsDiv}>
          {data.data?.map((item) => {
            return (
              <div key={item.id}>
                <Link href={`${props.slug}/${item.post_name}`}>
                  <NewsCard
                    title={item.post_title}
                    date={new Date(item.post_modified).toLocaleString()}
                    content={item.post_content}
                    // slug={item.name}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.readMoreLabel}>Read More</div>
      </div>
    </>
  );
};

export default NewsSection;
