import UpdatesSound from "@/components/common/UpdatesSound";
import React from "react";
import styles from "./seriesOverview.module.css";
// import ScoreBoard from "@/components/scorePage/Commentary/ScoreBoard";
// import LiveScoreSection from "@/components/common/LiveScoreSection";
// import ScoreCardPanel from "../../../components/common/ScoreCardPanel";
import NewsSection from "../../../components/common/NewsSection";
import ScoreCardPanelReusable from "@/components/common/ScoreCardPanelReuable";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchSeriesMatches = async (seriesId) => {
  const res = await fetch(
    `${baseUrl}/competitions/${seriesId}/matches/?token=${key}&per_page=50&&paged=1`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { "series-name": seriesName } = params;
  // console.log(seriesName, "seriesNameeeeeeeeeeeeeeeeeeee");
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );

  const seriesMatches = await fetchSeriesMatches(seriesIdInt);

  return (
    <>
      <div className={`${styles.container} ${styles.seriesOverview}`}>
        <NavBarSec active="series" />
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="overview" seriesName={seriesName} />
        </div>
        <div className={styles.matchesList}>
          <ScoreCardPanelReusable data={seriesMatches} display={false} />
        </div>
        <div className={styles.news}>
          {/* <p>NEWS</p> */}
          <NewsSection name="NEWS" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
