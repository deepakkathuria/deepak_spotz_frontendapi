import React from "react";
import ScoreCard from "../../../../components/common/ScoreCard";
import styles from "./teamSchedule.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchTeamMatches = async (teamId) => {
  const res = await fetch(`${base_url}/teams/25/matches?token=${token}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  const currentCountry = "india";
  const data = await fetchTeamMatches();
  return (
    <>
      <div className={styles.container}>
        <NavBarSec />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav active="schedule" currentCountry={teamName} />
        </div>
        <div className={styles.results}>
          {data?.response?.items?.map((match, index) => {
            return (
              <div className={styles.cardsWithDate}>
                <p className={styles.date}>
                  {new Date(match?.date_start).toLocaleString("en-us")}
                </p>
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
