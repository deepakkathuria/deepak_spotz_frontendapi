"use client";
import React from "react";
import styles from "./IccRanking.module.css";

const IccRankingBox = () => {
  return (
    <>
      <div className={styles.btns}>
        <button className={`${styles.selected}`}>TEST</button>
        <button className="btn">ODI</button>
        <button className="btn">T20</button>
      </div>
      <div className={styles.statsType}>
        <button>Teams</button>
        <button>Batting</button>
        <button>Bowling</button>
        <button>ALR</button>
      </div>
      <div className={styles.rectangle}></div>
      {/* <hr className={styles.hr} /> */}
      <div className={styles.table}>
        <div className={styles.heading}>
          <span>Rank</span>
          <span>Team</span>
          <span>Rating</span>
        </div>
        <div className={styles.data}>
          <div className={styles.data1}>
            <div>1.</div>
            <div>India</div>
            <div>118</div>
          </div>
          <div className={styles.data1}>
            <div>2.</div>
            <div>Australia</div>
            <div>118</div>
          </div>
          <div className={styles.data1}>
            <div>3.</div>
            <div>England</div>
            <div>115</div>
          </div>
          <div className={styles.data1}>
            <div>4.</div>
            <div>South Africa</div>
            <div>104</div>
          </div>
          <div className={styles.data1}>
            <div>5.</div>
            <div>New Zealand</div>
            <div>100</div>
          </div>
          {/* <hr className={styles.hrData} /> */}
        </div>
      </div>
    </>
  );
};

export default IccRankingBox;
