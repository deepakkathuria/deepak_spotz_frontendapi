import React from "react";
import styles from "./morePost.module.css";
import ButtonTab from "@/components/common/ButtonTab";
import NewsCard from "@/components/common/NewsCard";

const page = () => {
  return (
    <>
      <div className={styles.morePostContainer}>
        <div className={styles.latestNewsSection}>
          <div className={styles.latestNewsSectionTabs}>
            <ButtonTab title="Latest News" />
            <ButtonTab title="Fantasy Tips" />
          </div>
          <div className={styles.latestNewsSectionTabs}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className={styles.readMoreBtn}>
            <button className={styles.btn}>See more News</button>
          </div>
        </div>

        <div className={styles.OtherNewsSection}>
          <div className={styles.OtherNewsSectionTabs}>
            <ButtonTab title="Latest News" />
            <ButtonTab title="Fantasy Tips" />
          </div>
          <div className={styles.OtherNewsSectionTabs}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div className={styles.readMoreBtn}>
            <button className={styles.btn}>See more News</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
