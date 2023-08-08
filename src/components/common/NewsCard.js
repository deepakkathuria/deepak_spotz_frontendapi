// "use client";
import React from "react";
import styles from "../styles/NewsCard.module.css";
import Image from "next/image";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const fetchPostThumb = async (thumbId) => {
  const res = await fetch(
    `https://demo2.sportzwiki.com/wp-json/wp/v2/media/${thumbId}`
  );
  const data = await res.json();
  return data.guid.rendered;
};

const NewsCard = async (props) => {
  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.newsCover}>
          <Image
            src={
              props?.featuredMedia
                ? props?.featuredMedia
                : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            }
            width={0}
            height={0}
            
            alt={props?.title || "SportzWiki"}
            sizes="100vh"
            style={{ width: "13.5rem", height: "10rem", borderRadius: "3px" }}
          />
        </div>
        <div className={styles.newsDetails}>
          <p className={styles.newsTitle}>{props?.title}</p>
          {/* <p className={styles.newsDescription}>
            {props?.content?.substring(0, 45).replace(/(<([^>]+)>)/gi, "")}...
          </p> */}
          <p className={styles.newsDate}>{props?.date}</p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
