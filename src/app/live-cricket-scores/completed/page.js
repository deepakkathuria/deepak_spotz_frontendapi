import React from "react";
import styles from "../LiveCricketScores.module.css";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import UpdatesSound from "../../../components/common/UpdatesSound";
import ScoreCard from "../../../components/common/ScoreCard";
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;

const fetchLiveMatches = async () => {
  const res = await fetch(`${baseUrl}/matches/?status=2&token=${token}`);
  const data = await res.json();
  return data;
};

const page = async () => {
  const matches = await fetchLiveMatches();
  // console.log(matches, "matchesssssssss");
  return (
    <>
      <div className={styles.container}>
        <div className="navSev">
          <NavBarSec active="live" />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <ul className={styles.navUl}>
            <li className={`${styles.navLi}`}>
              <a href="/live-cricket-scores">Live</a>
            </li>
            <li className={`${styles.navLi} ${styles.active}`}>
              <a href="/live-cricket-scores/completed">Completed</a>
            </li>
            <li className={styles.navLi}>
              <a href="/live-cricket-scores/upcoming">Upcoming</a>
            </li>
          </ul>
        </div>

        <div className={styles.scoreCardWithSeriesName}>
          {matches?.response?.items?.map((match, index) => {
            return (
              <div key={index} className="seriesCard">
                <div className={styles.name}>
                  <p>India Tour of australia</p>
                </div>
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
