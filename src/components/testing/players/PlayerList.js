import React from "react";
import PlayerCardMini from "./PlayerCardMini";
import styles from "./PlayerList.module.css";
import Link from "next/link";
import slugify from "slugify";



const PlayerList = ({ playerType, playerArray, country }) => {
  console.log(playerArray, playerType, country, "fffffffffffffffffffffffffffffffffffffffffffffffffff")
  return (
    <div className={styles.container}>
      <div className={styles.letter}>
        {playerType ? playerType.toUpperCase() + " SQUAD" : ""}
      </div>
      <div className={styles.list}>
        {playerArray.map((player) => (
          <Link
            key={player.pid}
            href={`/cricketers/${country}/${slugify(player.title.toLowerCase(), {
              remove: /[*+~.()'"!:@]/g,
            })}-${player.pid}/`}
            passHref
          >
            <PlayerCardMini
              name={player.title}
              birth={player.birthdate}
              playing_style={player.batting_style}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlayerList;

