import React from "react";
import PlayerCardMini from "./PlayerCardMini";
import styles from "./PlayerList.module.css";

const PlayerList = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.letter}>A</div>
        <div className={styles.list}>
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

          <PlayerCardMini />
          <PlayerCardMini />
        </div>
      </div>
    </>
  );
};

export default PlayerList;
