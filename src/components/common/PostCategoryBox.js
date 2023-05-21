import React from "react";
import styles from "../styles/PostCategoryBox.module.css";

const PostCategoryBox = (props) => {
  // console.log("$$$$$$$$$$$$$$$");
  // console.log(props.categories);
  // console.log("$$$$$$$$$$$$$$$");
  return (
    <>
      <div className={styles.postCategoryBoxContainer}>
        <h4 className={styles.selected}>All</h4>
        {props.categories.split(",").map((category) => {
          return (
            // <h4 key={category} className={styles.selected}>
            <h4 key={category}>{category}</h4>
          );
        })}
        {/* <h4>T20 World Cup 2022</h4>
        <h4>South Africa Tour of India 2022</h4>
        <h4>Australia Tour of India 2022</h4>
        <h4>IPL auction 2019</h4>
        <h4>IPL 2019 stats</h4>
        <h4>IPL 2022</h4>
        <h4>Chennai Super Kings - CSK</h4> */}
      </div>
    </>
  );
};

export default PostCategoryBox;
