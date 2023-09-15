import React from "react";
import styles from "./PlayerScoreStats.module.css";
import BatsmenStats from "./BatsmenStats";
import BowlerStats from "./BowlerStats";

const PlayerScoreStats = (props) => {
  // console.log(props?.data, "datascorenjkdfnkjn");
  return (
    <>
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        {props?.data?.response?.innings?.map((inning, i) => (
          <>
            <BatsmenStats data={inning} />
            <BowlerStats data={inning} />
          </>
        ))}
      </div>
    </>
  );
};

export default PlayerScoreStats;
