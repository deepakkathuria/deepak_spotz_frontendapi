import React from "react";
import styles from "../styles/FaqLive.module.css";

const FaqLive = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Frequently asked questions</h1>

        <div className={styles.faqDrawer}>
          <input
            className={`${styles.faqDrawerTrigger} ${styles.hiddenCheckbox}`}
            id="faq-drawer"
            type="checkbox"
          />
          <label className={styles.faqDrawerTitle} htmlFor="faq-drawer">
            What is SportzWiki
          </label>
          <div className={styles.faqDrawerContentWrapper}>
            <div className={styles.faqDrawerContent}>
              <p>
                Latest Sports News: Get all latest sports news today on
                different sports, from Cricket, Football, Tennis, WWE, Esports,
                Badminton, Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.
              </p>
            </div>
          </div>
        </div>

        {/* <div className={styles.faqDrawer}>
          <input
            className={`${styles.faqDrawerTrigger} ${styles.hiddenCheckbox}`}
            id="faq-drawer-2"
            type="checkbox"
          />
          <label className={styles.faqDrawerTitle} htmlFor="faq-drawer-2">
            DRAWER TWO
          </label>
          <div className={styles.faqDrawerContentWrapper}>
            <div className={styles.faqDrawerContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.faqDrawer}>
          <input
            className={`${styles.faqDrawerTrigger} ${styles.hiddenCheckbox}`}
            id="faq-drawer-3"
            type="checkbox"
          />
          <label className={styles.faqDrawerTitle} htmlFor="faq-drawer-3">
            DRAWER THREE
          </label>
          <div className={styles.faqDrawerContentWrapper}>
            <div className={styles.faqDrawerContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default FaqLive;
