import React from "react";
import ScoreCard from "../../../../components/common/ScoreCard";
import styles from "./teamSchedule.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
const base_url = process.env.ENTITY_URL;
const token = process.env.ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
// const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;
// const base_url = process.env.ENTITY_URL;
// const token = process.env.ENTITY_TOKEN;

const fetchTeamInfoById = async (teamId) => {
  const res = await fetch(`${base_url}/teams/${teamId}?token=${token}`);
  const team = await res.json();
  return team;
};

const fetchTeamMatches = async (teamId) => {
  const res = await fetch(`${base_url}/teams/${teamId}/matches?token=${token}`);
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  // read route params then fetch data
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  const data = await fetchTeamInfoById(teamId);
  // const data = await fetchTeamMatches(teamId);

  // return an object
  return {
    title: `${data?.response?.title} Cricket Team Schedule - SportzWiki`,
    description: `Get full cricket team schedule of ${data?.response?.title} on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { teamName } = params;
  // const teamId = teamName?.split("-")[1];
  const teamId = parseInt(teamName.split("-")[teamName.split("-").length - 1]);
  const currentCountry = "india";
  const data = await fetchTeamMatches(teamId);
  const data2 = await fetchTeamInfoById(teamId);
  // console.log(data.response.items[0],"datatatattataa");
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricket Team`,
      url: "/cricket-team",
    },
    {
      name: `${data2?.response?.title}`,
      url: `/cricket-team/${teamName}`,
    },
    {
      name: `Schedule`,
      // url: `/cricket-team/${teamName}/schedule`,
    },
  ];
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "Home",
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
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <NavBarSec active="teams" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem" }}>
          {data2?.response?.title} Team Schedule
        </h1>
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
                  status={match?.status}
                />
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "2rem" }} className="header">
          <h2 style={{ fontSize: "1.4rem" }}>SportzWiki Media</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            It is an honour to introduce—Sportzwiki – sports is life, is one of
            the leading online sports mediums across the globe. The digital
            platform over the years has grabbed the attention of an audience
            worldwide.From the cricketing ground to the badminton court—the
            dedicated team at Sportzwiki has been always on the lookout to
            provide insights, pre and post-match stuff and plenty with 24/7
            window.
          </p>
        </div>
        <FaqLive />
      </div>
    </>
  );
};

export default page;
