// "use client";
import React from "react";
import styles from "../styles/NewsCard.module.css";
import Image from "next/image";
const base_url = process.env.BASE_URL_DO;
import { DateTime } from "luxon";

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
            // src={thumbnail}
            src={
              props?.featuredMedia
                ? props?.featuredMedia
                : "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1693483094/swLogo_zvkyfp.jpg"
            }
            width={0}
            height={0}
            alt="SportzWiki Logo"
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
          {/* <p>{new Date(props?.date).toLocaleString("en-US")}</p> */}
          <MyComponent date={props?.date} />
        </div>
      </div>
    </>
  );
};

export default NewsCard;
