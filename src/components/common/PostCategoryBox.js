import React from "react";
import styles from "../styles/PostCategoryBox.module.css";

const PostCategoryBox = (props) => {
  return (
    <>
      <div className={styles.postCategoryBoxContainer}>
        <h4 className={styles.selected}>All</h4>
        {props.categories?.map((category) => {
          return <h4 key={category.id}>{category.name}</h4>;
        })}
      </div>
    </>
  );
};

export default PostCategoryBox;
