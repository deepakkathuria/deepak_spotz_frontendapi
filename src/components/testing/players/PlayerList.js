import React from "react";
import PlayerCardMini from "./PlayerCardMini";
import styles from "./PlayerList.module.css";
import Link from "next/link";
import slugify from "slugify";

const PlayerList = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.letter}>
          {props?.playerType} SQUAD
        </div>
        <div className={styles.list}>
          {props?.playerArray.map((player, index) => {
            return (
              <Link
                key={index}
                href={`/cricketers/${props?.country}/${slugify(
                  player?.title.toLowerCase(),
                  { remove: /[*+~.()'"!:@]/g }
                )}-${player?.pid}/`}
              >
                <PlayerCardMini
                  name={player?.title}
                  birth={player?.birthdate}
                  playing_style={player?.batting_style}
                />
              </Link>
            );
          })}
          {/* <PlayerCardMini />
          <PlayerCardMini />
          <PlayerCardMini />
          <PlayerCardMini />
          <PlayerCardMini />

          <PlayerCardMini />
          <PlayerCardMini />
          <PlayerCardMini />

          <PlayerCardMini />
          <PlayerCardMini />
          <PlayerCardMini />

          <PlayerCardMini />
          <PlayerCardMini /> */}
        </div>
      </div>
    </>
  );
};

export default PlayerList;
