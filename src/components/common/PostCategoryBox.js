import React from "react";
import styles from "../styles/PostCategoryBox.module.css";
import Link from "next/link";
// const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const PostCategoryBox = (props) => {
  return (
    <>
      <div className={styles.postCategoryBoxContainer}>
        <h4 className={styles.selected}>All</h4>
        {props.categories?.map((category, index) => {
          return (
            <Link key={index} href={`/${category.slug}`}>
              <h4 key={category.id}>{category.name}</h4>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default PostCategoryBox;
