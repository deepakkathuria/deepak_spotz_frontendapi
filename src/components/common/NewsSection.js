import React from "react";
import styles from "../styles/NewsSection.module.css";
import { GiCricketBat } from "react-icons/gi";
import ButtonTab from "./ButtonTab";
import NewsCard from "./NewsCard";
// import styles from "../styles/NewsSection.module.css";

const NewsSection = () => {
  return (
    <>
      <div className={styles.newsSectionContainer}>
        <div className={styles.newsSectionHeading}>
          <h3>Cricket</h3>
          <GiCricketBat color="#000" />
        </div>
        <div className={styles.newsSectionTabs}>
          <ButtonTab title="Latest News" />
          <ButtonTab title="Fantasy Tips" selected="true" />
        </div>
        <div className={styles.newsCardsDiv}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className={styles.readMoreLabel}>Read More</div>
      </div>
    </>
  );
};

export default NewsSection;
