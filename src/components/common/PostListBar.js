import React from "react";
import styles from "../styles/PostListBar.module.css";
import NewscardNoBorder from "./NewscardNoBorder";

const PostListBar = () => {
  return (
    <>
      <div className={styles.postListBarContainer}>
        <div className={styles.postListTitle}>
          <h3>
            Asia Cup <span>2022</span>
          </h3>
        </div>
        <div className={styles.postList}>
          <NewscardNoBorder />
          <NewscardNoBorder />
          <NewscardNoBorder />
          <NewscardNoBorder />
          <NewscardNoBorder />
        </div>
      </div>
    </>
  );
};

export default PostListBar;
