import React from "react";
import styles from "../styles/PostTags.module.css";

const PostTags = (props) => {
  return (
    <>
      <div className={styles.postTagsContainer}>
        <div className={styles.tagTitle}>
          <h3>Tagged:</h3>
        </div>
        <div className={styles.tags}>
          {props?.tags?.split(",")?.map((tag) => {
            return <h3 key={tag}>{tag}</h3>;
          })}
        </div>
      </div>
    </>
  );
};

export default PostTags;
