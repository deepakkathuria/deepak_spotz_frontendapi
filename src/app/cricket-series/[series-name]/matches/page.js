import React from "react";
import styles from "./schedule.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import ScoreCard from "../../../../components/common/ScoreCard";
import StatsNav from "@/components/series/StatsNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchUpcomingMatches = async (matchId) => {
  const res = await fetch(
    `${baseUrl}/competitions/${matchId}/matches/?token=${key}&per_page=50&&paged=1`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { "series-name": seriesName } = params;
  console.log(seriesName, "seriesNameeeeeeeeeeeeeeeeeeee");
  const seriesIdInt = parseInt(
    seriesName.split("-")[seriesName.split("-").length - 1]
  );
  const matches = await fetchUpcomingMatches(seriesIdInt);
  // console.log(matches.response.items,'matchesssssssssssssss');
  return (
    <>
      <div className={styles.container}>
        <NavBarSec active="series" />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav active="schedule" seriesName={seriesName} />
        </div>
        <div className={styles.schedule}>
          {matches?.response?.items?.map((match, index) => {
            return (
              <div className={styles.cardsWithDate}>
                <p className={styles.date}>{match?.competition?.datestart}</p>
                <ScoreCard
                  key={index}
                  matchID={match?.match_id}
                  title={match?.short_title ? match.short_title : "no title"}
                  teamAName={match?.teama.name ? match?.teama.name : "NA"}
                  teamBName={match?.teamb.name}
                  teamAScores={match?.teama.scores}
                  teamBScores={match?.teamb.scores}
                  teamAOvers={match?.teama.overs}
                  teamBOvers={match?.teamb.overs}
                  teamALogo={match?.teama.logo_url}
                  teamBLogo={match?.teamb.logo_url}
                  matchScoreDetails={
                    match?.status_note
                      ? match.status_note
                      : "no status information"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
