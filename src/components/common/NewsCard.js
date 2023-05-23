import React from "react";
import styles from "../styles/NewsCard.module.css";
import Image from "next/image";

const NewsCard = (props) => {
  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.newsCover}>
          <Image
            src="https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            width={0}
            height={0}
            alt="SportzWiki Logo"
            sizes="100vh"
            style={{ width: "10.5rem", height: "10rem" }}
          />
        </div>
        <div className={styles.newsDetails}>
          <p className={styles.newsTitle}>
            {/* GT vs RR: “It’s Unbelievable How He Does Such Things” */}
            {props.title}
          </p>
          <p className={styles.newsDescription}>
            {/* During the match between New Zealand and Ireland. New Zealand now
            holds... */}
            {props.content?.substring(0, 50)}
          </p>
          <p className={styles.newsDate}>
            {/* April 17, 2023 */}
            {props.date}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
