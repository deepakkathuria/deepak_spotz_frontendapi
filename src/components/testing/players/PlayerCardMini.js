import React from "react";
import styles from "./PlayerCardMini.module.css";
import Image from "next/image";

const PlayerCardMini = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          {/* <Image
            src={
              "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            }
            height={30}
            width={30}
          /> */}
        </div>
        <div className={styles.details}>
          <div className={styles.nameAge}>
            <div className={styles.name}>{props?.name || ""}</div>
            <div className="age">{props?.birth}</div>
          </div>
          <div className="playingStyles">{props?.playing_style}</div>
        </div>
      </div>
    </>
  );
};

export default PlayerCardMini;
