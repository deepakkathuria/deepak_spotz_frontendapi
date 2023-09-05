import React from "react";
import Image from "next/image";
import styles from "./audioBar.module.css";

const AudioBar = () => {
  return (
    <>
      <div className={styles.audioBetButtons}>
        <div className={styles.audioPlayer}>
          <Image
            className={styles.audioPlayer}
            src="https://res.cloudinary.com/dbb7g0jqa/image/upload/v1687933543/Group_2456_kpy57v.png"
            width={340}
            height={53}
            alt=""
          />
        </div>
        <div className={styles.fantasyButtons}>
          <button className={styles.btn}>
            <Image src="/gaurav/bet-casino.svg" width={30} height={30} alt="" />
            <p>Place a bet</p>
          </button>
          <button className={styles.btn}>
            <Image
              src="/gaurav/fantasy-games.svg"
              width={30}
              height={30}
              alt=""
            />
            <p>Fantasy Team</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AudioBar;
