import React from "react";
import styles from "./cricketPlayersHome.module.css";
import UpdatesSound from "../../../components/common/UpdatesSound";
import PlayerTeamSelect from "../../../components/testing/players/PlayerTeamSelect";
import PlayerList from "../../../components/testing/players/PlayerList";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchPlayersListByTeamId = async (teamIdResult) => {
  const res = await fetch(
    `${baseUrl}/teams/${teamIdResult}/player?token=${token}`
  );
  const data = await res.json();
  return data;
};

const teamId = [
  {
    name: "india",
    id: 25,
  },
  {
    name: "australia",
    id: 5,
  },
  {
    name: "pakistan",
    id: 13,
  },
  {
    name: "southafrica",
    id: 19,
  },
  {
    name: "westindies",
    id: 17,
  },
  {
    name: "newzealand",
    id: 7,
  },
  {
    name: "srilanka",
    id: 21,
  },
  {
    name: "ireland",
    id: 11,
  },
  {
    name: "uae",
    id: 15,
  },
  {
    name: "bangladesh",
    id: 23,
  },
  {
    name: "scotland",
    id: 9,
  },
];

function getIdFromName(teamName) {
  const normalizedTeamName = teamName.toLowerCase();
  const team = teamId.find((team) => team.name === normalizedTeamName);
  return team ? team.id : null;
}

export async function generateMetadata({ params }) {
  const { country } = params;
  return {
    title: `${country} Cricketers Information | International, Domestic & Women`,
    description: `Full ${country} cricket player information of International, domestic & woemens Cricket team on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { country } = params;

  const teamIdResult = getIdFromName(country);

  const items = await fetchPlayersListByTeamId(teamIdResult);

  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricketers`,
      // url: "/cricketers",
    },
    // {
    //   name: `${teamName.toUpperCase().slice(0, 40)}...`,
    //   url: `/cricket-series/${teamName}`,
    // },
    // {
    //   name: `NEWS`,
    //   url: "/",
    // },
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
          // {
          //   position: 3,
          //   name: breadcrumbs[2]?.name,
          //   item: `${site_url}${breadcrumbs[2]?.url}`,
          // },
          // {
          //   position: 4,
          //   name: breadcrumbs[3]?.name,
          //   item: `${site_url}${breadcrumbs[3]?.url}`,
          // },
        ]}
      />
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <NavBarSec active="players" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem" }}>Cricket Players</h1>
        <div className={styles.teamSelect}>
          <PlayerTeamSelect />
        </div>

        {/* <div className={styles.playerGenderSelectorAndSearchContainer}>
          <div className={styles.genderSelector}>
            <ul>
              <li className={styles.active}>All</li>
              <li>Men</li>
              <li>Women</li>
            </ul>
          </div>
          <div className={styles.search}>
            <input type="text" placeholder="Search Player" />
          </div>
        </div> */}
        <div className={styles.list}>
          {Object.entries(items.response.items.players).map(
            ([playerType, playerArray], index) => (
              <div key={index}>
                <PlayerList
                  playerArray={playerArray}
                  playerType={playerType}
                  country={country}
                />
              </div>
            )
          )}
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
