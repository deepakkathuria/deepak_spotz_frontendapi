import React from "react";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import NavBarSec from "@/components/scorePage/NavBarSec";
import styles from "./sports.module.css";
import NewsSection from "@/components/common/NewsSection";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <NavBarSec active="home" />
        <div className={styles.scores}>
          <LiveScoreSection />
        </div>
        <div className={styles.newsSection}>
          <NewsSection name="TRENDING NEWS" id="3" slug="cricket" />
          {/* <NewsSection name="IPL 2023" id="3" slug="cricket" />
          <NewsSection name="ASIA CUP 2023" id="3" slug="cricket" />
          <NewsSection name="EDITOR's CHOICE" id="3" slug="cricket" /> */}
        </div>
      </div>
    </>
  );
};

export default page;
