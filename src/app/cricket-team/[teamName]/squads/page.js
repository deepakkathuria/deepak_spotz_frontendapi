import React from "react";
import styles from "./teamSquads.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Teams from "@/components/scores/Teams";
import PlayerCardMini from "@/components/testing/players/PlayerCardMini";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchTeamPlayers = async () => {
  const res = await fetch(`${base_url}/teams/25/player?token=${token}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const data = await fetchTeamPlayers();
  // console.log(data.response.items.players.t20i, "teamssssssssss");
  const currentCountry = "india";
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  return (
    <>
      <div className={styles.container}>
        <NavBarSec />
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
