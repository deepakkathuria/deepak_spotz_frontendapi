// "use client";
import React from "react";
import styles from "../styles/NewsCard.module.css";
import Image from "next/image";
const base_url = process.env.BASE_URL_DO;

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
          <p>{new Date(props?.date).toLocaleString("en-US")}</p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
