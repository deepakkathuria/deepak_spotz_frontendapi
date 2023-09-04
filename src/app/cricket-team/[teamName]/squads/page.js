import React from "react";
import styles from "./teamSquads.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Teams from "@/components/scores/Teams";
import PlayerCardMini from "@/components/testing/players/PlayerCardMini";
import Link from "next/link";
import slugify from "slugify";
// import OrganisationLd from "@/json-ld/OrganisationLd";
const base_url = process.env.ENTITY_URL;
const token = process.env.ENTITY_TOKEN;

const fetchTeamPlayers = async (teamId) => {
  const res = await fetch(`${base_url}/teams/${teamId}/player?token=${token}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  // console.log(data.response.items.players.t20i, "teamssssssssss");
  const currentCountry = "india";
  const { teamName } = params;
  // const teamId = teamName?.split("-")[1];
  const teamId = parseInt(teamName.split("-")[teamName.split("-").length - 1]);
  const data = await fetchTeamPlayers(teamId);
  // console.log(data.response, "dataaaaaaaaaaaaaaa");
  return (
    <>
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <NavBarSec active="teams" />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav active="squads" currentCountry={teamName} />
        </div>
        <div className={styles.team}>
          {/* <Teams data={playingSquad} /> */}
          {data?.response?.items?.players?.odi?.map((player, index) => {
            return (
              <Link
                key={index}
                href={`/cricketers/${slugify(
                  data?.response?.items?.team?.title,
                  { remove: /[*+~.()'"!:@]/g }
                ).toLowerCase()}/${slugify(player?.title.toLowerCase(), {
                  remove: /[*+~.()'"!:@]/g,
                })}-${player?.pid}`}
              >
                <PlayerCardMini
                  key={index}
                  name={player?.title}
                  birth={player?.birthdate}
                  playing_style={
                    player?.playing_role === "bowl"
                      ? player.bowling_style
                      : player.batting_style
                  }
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
