import React from "react";
import styles from "../styles/NewsSection.module.css";
// import { GiCricketBat } from "react-icons/gi";
// import ButtonTab from "./ButtonTab";
import NewsCard from "./NewsCard";
// import axios from "axios";
// import Link from "next/link";
const base_url = process.env.BASE_URL_DO;
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const fetchPostByCategoryId = async (id, perPage) => {
  const res = await fetch(
    `${BASE_URL_WP}wp-json/wp/v2/posts?categories=${id}&per_page=${perPage}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
      next: { revalidate: 1500 },
      // { cache: "no-store" }
    }
  );
  return await res.json();
};

const NewsSection = async (props) => {
  const data = await fetchPostByCategoryId(props.id, 9);

  return (
    <>
      <div className={styles.newsSectionContainer}>
        <div className={styles.newsSectionHeading}>
          <h3>{props?.name}</h3>
        </div>
        <div className={styles.newsCardsDiv}>
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <a href={`/${props?.slug?.toLowerCase()}/${item?.slug}`}>
                  <NewsCard
                    title={item?.title?.rendered}
                    date={item?.date_gmt ? item.date_gmt : ""}
                    content={item?.content?.rendered}
                    id={item?.id}
                    featuredMedia={item?.featured_image_url}
                    slug={item?.slug}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.readMoreLabel}>
          <a href={`/${props?.slug}`}>Read More</a>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
