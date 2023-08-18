// import React from "react";
import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div class={styles.container}>
      <div class={styles.colSm6 + " " + styles.colMd3}>
        <div class={styles.movieIsloading}>
          <div class={styles.loadingImage}></div>
          <div class={styles.loadingContent}>
            <div class={styles.loadingTextContainer}>
              <div class={styles.loadingMainText}></div>
              <div class={styles.loadingSubText}></div>
            </div>
            <div class={styles.loadingBtn}></div>
          </div>
        </div>
      </div>
      <div class={styles.colSm6 + " " + styles.colMd3}>
        {/* <div class={styles.movieIsloading}>
          <div class={styles.loadingImage}></div>
          <div class={styles.loadingContent}>
            <div class={styles.loadingTextContainer}>
              <div class={styles.loadingMainText}></div>
              <div class={styles.loadingSubText}></div>
            </div>
            <div class={styles.loadingBtn}></div>
          </div>
        </div>
      </div>
      <div class={styles.colSm6 + " " + styles.colMd3}>
        <div class={styles.movieIsloading}>
          <div class={styles.loadingImage}></div>
          <div class={styles.loadingContent}>
            <div class={styles.loadingTextContainer}>
              <div class={styles.loadingMainText}></div>
              <div class={styles.loadingSubText}></div>
            </div>
            <div class={styles.loadingBtn}></div>
          </div>
        </div>
      </div>
      <div class={styles.colSm6 + " " + styles.colMd3}>
        <div class={styles.movieIsloading}>
          <div class={styles.loadingImage}></div>
          <div class={styles.loadingContent}>
            <div class={styles.loadingTextContainer}>
              <div class={styles.loadingMainText}></div>
              <div class={styles.loadingSubText}></div>
            </div>
            <div class={styles.loadingBtn}></div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Loading;
