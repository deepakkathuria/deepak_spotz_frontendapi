import UpdatesSound from "@/components/common/UpdatesSound";
import TeamCountryNav from "@/components/teams/TeamCountryNav";
import React from "react";
import styles from "./news.module.css";
import NewsSection from "@/components/common/NewsSection";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="soundBox">
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav />
        </div>
        <div className="news">
          <NewsSection name="" id="3" slug="cricket" />
          <NewsSection name="" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
