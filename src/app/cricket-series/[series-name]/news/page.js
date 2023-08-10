import React from "react";
import styles from "./news.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import NewsSection from "../../../../components/common/NewsSection";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";

const page = ({ params }) => {
  const { "series-name": seriesName } = params;
  return (
    <>
      <div className={styles.container}>
        <div className="nav">
          <NavBarSec active="series" />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="news" seriesName={seriesName} />
        </div>
        <NewsSection name="" id="3" slug="cricket" />
      </div>
    </>
  );
};

export default page;
