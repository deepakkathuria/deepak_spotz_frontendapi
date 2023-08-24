// "use client";
import React from "react";
import styles from "../styles/NewsCard.module.css";
import Image from "next/image";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const NEXT_PUBLIC_BASE_URL_WP = process.env.NEXT_PUBLIC_BASE_URL_WP;
const NEXT_PUBLIC_WP_API_USERNAME = process.env.NEXT_PUBLIC_WP_API_USERNAME;
const NEXT_PUBLIC_WP_API_PASSWORD = process.env.NEXT_PUBLIC_WP_API_PASSWORD;

const credentials = `${NEXT_PUBLIC_WP_API_USERNAME}:${NEXT_PUBLIC_WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const fetchPostThumb = async (thumbId) => {
  const res = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/media/${thumbId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
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
          <p className={styles.newsDate}>
            {new Date(props?.date).toLocaleString()}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
