import React from "react";
import styles from "../styles/HeaderBox.module.css";

const HeaderBox = () => {
  //   console.log(props?.header1, "header1heading");
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.h1}>Live Cricket Scores & Updates</h1>
        <p className={styles.p}>
          Stay tuned to our live cricket score page for real-time updates,
          ball-by-ball commentary, and comprehensive match insights. Whether it
          is international tests, ODIs, T20s, or domestic league matches, we
          have got you covered with the latest scores and match highlights. Do
          not miss a single moment of the action!
        </p>
      </div>
    </>
  );
};

export default HeaderBox;
