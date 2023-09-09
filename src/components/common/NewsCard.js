// "use client";
import React from "react";
import styles from "../styles/NewsCard.module.css";
import Image from "next/image";
import { DateTime } from "luxon";
// const base_url = process.env.BASE_URL_DO;
const BASE_URL_WP = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

// const fetchPostThumb = async (thumbId) => {
//   const res = await fetch(
//     `${BASE_URL_WP}wp-json/wp/v2/media/${thumbId}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Basic ${base64Credentials}`,
//       },
//     }
//   );
//   const data = await res.json();
//   return data.guid.rendered;
// };

function MyComponent(props) {
  const date = props.date
    ? DateTime.fromISO(props.date).setZone("Asia/Kolkata")
    : null;

  const formattedDateLong = date
    ? date.toLocaleString(DateTime.DATETIME_MED)
    : null;
  const formattedDateShort = date
    ? date.toLocaleString(DateTime.DATE_SHORT)
    : null;

  return <p className={styles.newsDate}>{formattedDateLong}</p>;
}

const NewsCard = async (props) => {
  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.newsCover}>
          <Image
            src={
              props?.featuredMedia
                ? props?.featuredMedia
                : "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1693483094/swLogo_zvkyfp.jpg"
            }
            width={0}
            height={0}
            alt={props?.title || "SportzWiki"}
            sizes="100vh"
            style={{ width: "13.5rem", height: "10rem", borderRadius: "3px" }}
            quality={30}
          />
        </div>
        <div className={styles.newsDetails}>
          <div
            className={styles.newsTitle}
            dangerouslySetInnerHTML={{ __html: props?.title }}
          />
          {/* <p className={styles.newsDescription}>
            {props?.content?.substring(0, 45).replace(/(<([^>]+)>)/gi, "")}...
          </p> */}
          <MyComponent date={props?.date} />
        </div>
      </div>
    </>
  );
};

export default NewsCard;
