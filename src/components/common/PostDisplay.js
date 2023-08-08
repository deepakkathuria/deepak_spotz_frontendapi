import React from "react";
import styles from "../styles/PostDisplay.module.css";
import { FaUserTag, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import PostTags from "./PostTags";

const PostDisplay = (props) => {
  return (
    <>
      <div className={styles.postDisplayContainer}>
        <div className={styles.postHeading}>
          <h1
            className={styles.postHeadingInner}
            dangerouslySetInnerHTML={{ __html: props?.title }}
          ></h1>
        </div>
        <div className={styles.authorDateDiv}>
          <div className={styles.authorDetail}>
            <div className={styles.authorName}>
              <FaUserTag size={12} />
              <h3>{props?.author}</h3>
            </div>
            <div className={styles.publishDate}>
              <FaRegCalendarAlt size={12} />
              <h3>{new Date(props?.date).toLocaleString("en-us")}</h3>
            </div>
          </div>
          <div className={styles.postCover}>
            <Image
              src={
                props?.thumbnail
                  ? props?.thumbnail
                  : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
              }
              width={0}
              height={0}
              sizes="100%"
              alt={props.title || props.title}
              className={styles.coverImage}
              priority
            />
          </div>
          <div className={styles.postSummary}>
            <div
              className={styles.postSummaryInner}
              dangerouslySetInnerHTML={{ __html: props?.summary }}
            />
          </div>
          <div className={styles.postDescription}>
            <div
              className={styles.postDescriptionContent}
              dangerouslySetInnerHTML={{ __html: props?.description }}
            />
          </div>

          <PostTags tags={props.tags} />
        </div>
      </div>
    </>
  );
};

export default PostDisplay;
