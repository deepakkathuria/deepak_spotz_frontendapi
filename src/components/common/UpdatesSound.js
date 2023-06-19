// "use client";
import React from "react";
import styles from "../styles/UpdateSound.module.css";
import Image from "next/image";

const UpdatesSound = () => {
  return (
    <>
      <div className={styles.updateMainDiv}>
        <div className={styles.updatesIc}>
          Updates
          <div className={styles.soundOnIc}>
            <Image
              src="/gaurav/soundOn.svg"
              width={12}
              height={12}
              alt="sound on icon"
            />
          </div>
        </div>
        <div className={styles.UpdateHeadLines}>
          <p>Hardik Pandya - India's T20I captain? </p>
          <div className={styles.arrowIc}>
            <Image
              src="/gaurav/arrow-left.svg"
              width={10}
              height={10}
              alt="arrow-left"
            />
            <Image
              src="/gaurav/arrow-right.svg"
              width={10}
              height={10}
              alt="arrow-right"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatesSound;
