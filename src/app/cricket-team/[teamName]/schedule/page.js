import React from "react";
import ScoreCard from "../../../../components/common/ScoreCard";
import styles from "./teamSchedule.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import NavBarSec from "@/components/scorePage/NavBarSec";

const page = () => {
  const currentCountry = "india";
  return (
    <>
      <div className={styles.container}>
        <NavBarSec />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav active="schedule" currentCountry={currentCountry} />
        </div>
        <div className={styles.results}>
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
