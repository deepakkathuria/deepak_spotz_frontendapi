import React from "react";
import styles from "../styles/PostTags.module.css";
// import Link from "next/link";

const PostTags = (props) => {
  // console.log(props.tags, "tags objjjjjjjjjj");
  return (
    <>
      <div className={styles.postTagsContainer}>
        <div className={styles.tagTitle}>
          <h3>Tagged:</h3>
        </div>
        <div className={styles.tags}>
          {props?.tags.map((tag) => {
            return (
              <div key={tag.id} className={styles.tags}>
                <a href={`/wiki/${tag.slug}/`}>
                  <h3>{tag.name}</h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostTags;
