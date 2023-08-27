// import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colSm6 + " " + styles.colMd3}>
        <div className={styles.movieIsloading}>
          <div className={styles.loadingImage}></div>
          <div className={styles.loadingContent}>
            <div className={styles.loadingTextContainer}>
              <div className={styles.loadingMainText}></div>
              <div className={styles.loadingSubText}></div>
            </div>
            <div className={styles.loadingBtn}></div>
          </div>
        </div>
      </div>
      <div className={styles.colSm6 + " " + styles.colMd3}>
        <div className={styles.movieIsloading}>
          <div className={styles.loadingImage}></div>
          <div className={styles.loadingContent}>
            <div className={styles.loadingTextContainer}>
              <div className={styles.loadingMainText}></div>
              <div className={styles.loadingSubText}></div>
            </div>
            <div className={styles.loadingBtn}></div>
          </div>
        </div>
      </div>
      <div className={styles.colSm6 + " " + styles.colMd3}>
        <div className={styles.movieIsloading}>
          <div className={styles.loadingImage}></div>
          <div className={styles.loadingContent}>
            <div className={styles.loadingTextContainer}>
              <div className={styles.loadingMainText}></div>
              <div className={styles.loadingSubText}></div>
            </div>
            <div className={styles.loadingBtn}></div>
          </div>
        </div>
      </div>
      <div className={styles.colSm6 + " " + styles.colMd3}>
        <div className={styles.movieIsloading}>
          <div className={styles.loadingImage}></div>
          <div className={styles.loadingContent}>
            <div className={styles.loadingTextContainer}>
              <div className={styles.loadingMainText}></div>
              <div className={styles.loadingSubText}></div>
            </div>
            <div className={styles.loadingBtn}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
