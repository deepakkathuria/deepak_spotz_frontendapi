import React from "react";
import styles from "../styles/PostTags.module.css";
import Link from "next/link";
import slugify from "slugify";

const PostTags = (props) => {
  return (
    <>
      <div className={styles.postTagsContainer}>
        <div className={styles.tagTitle}>
          <h3>Tagged:</h3>
        </div>
        <div className={styles.tags}>
          {props?.tags?.split(",")?.map((tag) => {
            return (
              <div key={tag} className="tag">
                <Link href={`/wiki/${slugify(tag)}`}>
                  <h3 key={tag}>{tag}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostTags;
