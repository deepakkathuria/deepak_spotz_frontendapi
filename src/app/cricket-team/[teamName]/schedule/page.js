import React from "react";
import ScoreCard from "../../../../components/common/ScoreCard";
import styles from "./teamSchedule.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
// const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchTeamMatches = async (teamId) => {
  const res = await fetch(`${base_url}/teams/${teamId}/matches?token=${token}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const { teamName } = params;
  // const teamId = teamName?.split("-")[1];
  const teamId = parseInt(teamName.split("-")[teamName.split("-").length - 1]);
  const currentCountry = "india";
  const data = await fetchTeamMatches(teamId);
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET TEAM`,
      url: "/cricket-team",
    },
    {
      name: `${teamName.toUpperCase().slice(0, 40)}...`,
      url: `/cricket-team/${teamName}`,
    },
    {
      name: `SCHEDULE`,
      url: `/cricket-team/${teamName}/schedule`,
    },
  ];
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "HOME",
            item: "sportzwiki.com",
          },
          {
            position: 2,
            name: breadcrumbs[1]?.name,
            item: `${site_url}${breadcrumbs[1]?.url}`,
          },
          {
            position: 3,
            name: breadcrumbs[2]?.name,
            item: `${site_url}${breadcrumbs[2]?.url}`,
          },
          {
            position: 4,
            name: breadcrumbs[3]?.name,
            item: `${site_url}${breadcrumbs[3]?.url}`,
          },
        ]}
      />
      <OrganisationLd />
      <div className={styles.container}>
        <NavBarSec active="teams" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav active="schedule" currentCountry={teamName} />
        </div>
        <div className={styles.results}>
          {data?.response?.items?.map((match, index) => {
            return (
              <div key={index} className={styles.cardsWithDate}>
                <p className={styles.date}>
                  {new Date(match?.date_start).toLocaleString("en-us")}
                </p>
                <ScoreCard
                  // key={index}
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
