import React from "react";
import styles from "./PlayerScoreStats.module.css";
import BatsmenStats from "./BatsmenStats";
import BowlerStats from "./BowlerStats";

const PlayerScoreStats = (props) => {
  // console.log(props?.data, "datascorenjkdfnkjn");
  return (
    <>
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <BatsmenStats data={props?.data} />
        {/* ******************************************* */}
        {/* //bowler stat name is batsmen treat as bowler */}
        <BowlerStats data={props?.data} />
        {/* ******************************************* */}
      </div>
    </>
  );
};

export default PlayerScoreStats;
