import React from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";

const page = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.newsSectionDiv}>
          <NewsSection />
          <NewsSection />
        </div>
      </div>
    </>
  );
};

export default page;
