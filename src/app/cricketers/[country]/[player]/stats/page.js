import React from "react";
import styles from "./stats.module.css";
import UpdatesSound from "../../../../../components/common/UpdatesSound";
import PlayersNav from "../../../../../components/testing/players/PlayersNav";
import PlayerInfoTable from "../../../../../components/testing/players/PlayerInfoTable";
import StatsTable from "../../../../../components/testing/players/StatsTable";
import NavBarSec from "@/components/scorePage/NavBarSec";
import StatsTableBowling from "@/components/testing/players/StatsTableBowling";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchPlayerInfoById = async (playerId) => {
  const res = await fetch(`${baseUrl}/players/${playerId}?token=${token}`);
  const data = await res.json();
  return data;
};

const fetchPlayerStatsById = async (playerId) => {
  const res = await fetch(
    `${baseUrl}/players/${playerId}/stats?token=${token}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const { country, player } = params;

  const playerIdInt = parseInt(player.split("-")[player.split("-").length - 1]);

  const playerInfo = await fetchPlayerInfoById(playerIdInt);
  // console.log(playerInfo);
  return {
    title: `${
      playerInfo?.response?.player?.title || ""
    } | Indian Cricketers Information | International &  Domestic`,
    description: `Full player information of ${
      playerInfo?.response?.player?.title || ""
    }, fulll details, career on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { country, player } = params;
  const playerIdInt = parseInt(player.split("-")[player.split("-").length - 1]);

  const playerInfo = await fetchPlayerInfoById(playerIdInt);
  // console.log(playerInfo, "playerInfoplayerInfoplayerInfoplayerInfo");
  const playerStats = await fetchPlayerStatsById(playerIdInt);
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricketers`,
      url: "/cricketers",
    },
    {
      name: `${country}`,
      url: `/cricketers/${country}`,
    },
    {
      name: `${playerInfo?.response?.player?.title}`,
      url: `/cricketers/${country}/${player}`,
    },
    {
      name: `Stats`,
      url: `/cricketers/${country}/${player}/stats`,
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
          {
            position: 5,
            name: breadcrumbs[4]?.name,
            item: `${site_url}${breadcrumbs[4]?.url}`,
          },
        ]}
      />
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <div className="nav">
          <NavBarSec active="players" />
        </div>
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem" }}>
          {playerInfo?.response?.player?.title} Stats
        </h1>
        <div className={styles.dataMain}>
          <div className={styles.bannerNav}>
            <div className={styles.banner}></div>
            <div className={styles.nav}>
              <PlayersNav country={country} player={player} active={"stats"} />
            </div>
          </div>
          <div className={styles.details}>
            <PlayerInfoTable
              name={playerInfo?.response?.player?.title || ""}
              dob={playerInfo?.response?.player?.birthdate || ""}
              short_name={playerInfo?.response?.player?.short_name || ""}
              first_name={playerInfo?.response?.player?.first_name || ""}
              last_name={playerInfo?.response?.player?.last_name || ""}
              middle_name={playerInfo?.response?.player?.middle_name || ""}
              birthplace={playerInfo?.response?.player?.birthplace || ""}
              country={playerInfo?.response?.player?.country || ""}
              primary_team={playerInfo?.response?.player?.primary_team || ""}
              playing_role={playerInfo?.response?.player?.playing_role || ""}
              batting_style={playerInfo?.response?.player?.batting_style || ""}
              bowling_style={playerInfo?.response?.player?.bowling_style || ""}
              fielding_position={
                playerInfo?.response?.player?.fielding_position || ""
              }
              recent_match={playerInfo?.response?.player?.recent_match || ""}
              recent_appearance={
                playerInfo?.response?.player?.recent_appearance || ""
              }
              fantasy_player_rating={
                playerInfo?.response?.player?.fantasy_player_rating || ""
              }
              alt_name={playerInfo?.response?.player?.alt_name || ""}
              facebook_profile={
                playerInfo?.response?.player?.facebook_profile || ""
              }
              twitter_profile={
                playerInfo?.response?.player?.twitter_profile || ""
              }
              instagram_profile={
                playerInfo?.response?.player?.instagram_profile || ""
              }
              nationality={playerInfo?.response?.player?.nationality || ""}
            />
          </div>

          <div className={styles.table}>
            <StatsTable
              data={playerStats.response.batting}
              type="Batting Stats"
              typeStr="bat"
            />
            <StatsTableBowling
              data={playerStats.response.bowling}
              type="Bowling Stats"
              typeStr="bowl"
            />
          </div>
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
