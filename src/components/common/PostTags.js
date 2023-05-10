import React from "react";
import styles from "../styles/PostTags.module.css";

const PostTags = () => {
  return (
    <>
      <div className={styles.postTagsContainer}>
        <div className={styles.tagTitle}>
          <h3>Tagged:</h3>
        </div>
        <div className={styles.tags}>
          <h3>IPL 2023</h3>
          <h3>KL Rahul</h3>
          <h3>Kurnal Pandya</h3>
          <h3>Chennai Super King</h3>
          <h3>Jaydev Unadkat</h3>
          <h3>Virat Kohli</h3>
          <h3>IPL 2023</h3>
        </div>
      </div>
    </>
  );
};

export default PostTags;
