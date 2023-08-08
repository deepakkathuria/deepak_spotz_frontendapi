import React from "react";
import styles from "./schedule.module.css";
import UpdatesSound from "@/components/common/UpdatesSound";
import ScoreCard from "@/components/common/ScoreCard";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="soundBox">
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <ul className={styles.tertiaryNavUl}>
            <li className={`${styles.tertiaryNavLi} ${styles.active}`}>
              Overview
            </li>
            <li className={styles.tertiaryNavLi}>Schedule & Results</li>
            <li className={styles.tertiaryNavLi}>News</li>
            <li className={styles.tertiaryNavLi}>Stats</li>
            <li className={styles.tertiaryNavLi}>Squads</li>
            <li className={styles.tertiaryNavLi}>Venues</li>
            <li className={styles.tertiaryNavLi}>Videos</li>
            <li className={styles.tertiaryNavLi}>Photos</li>
          </ul>
        </div>
        <div className={styles.schedule}>
          <div className={styles.cardsWithDate}>
            <p className={styles.date}>13 May Friday</p>
            <ScoreCard
              //   key={index}
              //   matchID={match?.match_id}
              //   title={match?.short_title ? match.short_title : "no title"}
              //   teamAName={match?.teama.name ? match?.teama.name : "NA"}
              //   teamBName={match?.teamb.name}
              //   teamAScores={match?.teama.scores}
              //   teamBScores={match?.teamb.scores}
              //   teamAOvers={match?.teama.overs}
              //   teamBOvers={match?.teamb.overs}
              //   teamALogo={match?.teama.logo_url}
              //   teamBLogo={match?.teamb.logo_url}
              //   matchScoreDetails={
              //     match?.status_note ? match.status_note : "no status information"
              //   }

              key="{index}"
              matchID="{match?.match_id}"
              title="{match?.short_title ? match.short_ti}"
              teamAName="{match?.teama.name "
              teamBName="{match?.teamb.name}"
              teamAScores="{match?.teama.scores}"
              teamBScores="{match?.teamb.scores}"
              teamAOvers="{match?.teama.overs}"
              teamBOvers="{match?.teamb.overs}"
              //   teamALogo="{match?.teama.logo_url}"
              //   teamBLogo="{match?.teamb.logo_url}"
              matchScoreDetails="{
                    match?.status_note ? match.status_not
                }"
            />
          </div>

          <div className={styles.cardsWithDate}>
            <p className={styles.date}>13 May Friday</p>
            <ScoreCard
              //   key={index}
              //   matchID={match?.match_id}
              //   title={match?.short_title ? match.short_title : "no title"}
              //   teamAName={match?.teama.name ? match?.teama.name : "NA"}
              //   teamBName={match?.teamb.name}
              //   teamAScores={match?.teama.scores}
              //   teamBScores={match?.teamb.scores}
              //   teamAOvers={match?.teama.overs}
              //   teamBOvers={match?.teamb.overs}
              //   teamALogo={match?.teama.logo_url}
              //   teamBLogo={match?.teamb.logo_url}
              //   matchScoreDetails={
              //     match?.status_note ? match.status_note : "no status information"
              //   }

              key="{index}"
              matchID="{match?.match_id}"
              title="{match?.short_title ? match.short_ti}"
              teamAName="{match?.teama.name "
              teamBName="{match?.teamb.name}"
              teamAScores="{match?.teama.scores}"
              teamBScores="{match?.teamb.scores}"
              teamAOvers="{match?.teama.overs}"
              teamBOvers="{match?.teamb.overs}"
              //   teamALogo="{match?.teama.logo_url}"
              //   teamBLogo="{match?.teamb.logo_url}"
              matchScoreDetails="{
                    match?.status_note ? match.status_not
                }"
            />
          </div>

          <div className={styles.cardsWithDate}>
            <p className={styles.date}>13 May Friday</p>
            <ScoreCard
              //   key={index}
              //   matchID={match?.match_id}
              //   title={match?.short_title ? match.short_title : "no title"}
              //   teamAName={match?.teama.name ? match?.teama.name : "NA"}
              //   teamBName={match?.teamb.name}
              //   teamAScores={match?.teama.scores}
              //   teamBScores={match?.teamb.scores}
              //   teamAOvers={match?.teama.overs}
              //   teamBOvers={match?.teamb.overs}
              //   teamALogo={match?.teama.logo_url}
              //   teamBLogo={match?.teamb.logo_url}
              //   matchScoreDetails={
              //     match?.status_note ? match.status_note : "no status information"
              //   }

              key="{index}"
              matchID="{match?.match_id}"
              title="{match?.short_title ? match.short_ti}"
              teamAName="{match?.teama.name "
              teamBName="{match?.teamb.name}"
              teamAScores="{match?.teama.scores}"
              teamBScores="{match?.teamb.scores}"
              teamAOvers="{match?.teama.overs}"
              teamBOvers="{match?.teamb.overs}"
              //   teamALogo="{match?.teama.logo_url}"
              //   teamBLogo="{match?.teamb.logo_url}"
              matchScoreDetails="{
                    match?.status_note ? match.status_not
                }"
            />
          </div>

          <div className={styles.cardsWithDate}>
            <p className={styles.date}>13 May Friday</p>
            <ScoreCard
              //   key={index}
              //   matchID={match?.match_id}
              //   title={match?.short_title ? match.short_title : "no title"}
              //   teamAName={match?.teama.name ? match?.teama.name : "NA"}
              //   teamBName={match?.teamb.name}
              //   teamAScores={match?.teama.scores}
              //   teamBScores={match?.teamb.scores}
              //   teamAOvers={match?.teama.overs}
              //   teamBOvers={match?.teamb.overs}
              //   teamALogo={match?.teama.logo_url}
              //   teamBLogo={match?.teamb.logo_url}
              //   matchScoreDetails={
              //     match?.status_note ? match.status_note : "no status information"
              //   }

              key="{index}"
              matchID="{match?.match_id}"
              title="{match?.short_title ? match.short_ti}"
              teamAName="{match?.teama.name "
              teamBName="{match?.teamb.name}"
              teamAScores="{match?.teama.scores}"
              teamBScores="{match?.teamb.scores}"
              teamAOvers="{match?.teama.overs}"
              teamBOvers="{match?.teamb.overs}"
              //   teamALogo="{match?.teama.logo_url}"
              //   teamBLogo="{match?.teamb.logo_url}"
              matchScoreDetails="{
                    match?.status_note ? match.status_not
                }"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
