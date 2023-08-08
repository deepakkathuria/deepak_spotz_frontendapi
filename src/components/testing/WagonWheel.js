import React from "react";
import styles from "./WagonWheel.module.css";

const WagonWheel = ({ data }) => {
  const wagonData = data.innings.map((wagon) => ({
    x: wagon[5],
    y: wagon[6],
    zone: data.zones[wagon[7]],
    runs: wagon[3],
  }));

  const fieldWidth = 450;
  const fieldHeight = 300;

  const scaleX = fieldWidth / 421;
  const scaleY = fieldHeight / 227;

  const isValidCoordinate = (coordinate) =>
    !isNaN(coordinate) && coordinate !== null;

  return (
    <div style={{ marginTop: "10rem" }} className={styles.wagonWheel}>
      <svg width={fieldWidth} height={fieldHeight}>
        {wagonData.map((shot, index) => {
          if (isValidCoordinate(shot.x) && isValidCoordinate(shot.y)) {
            return (
              <circle
                key={index}
                cx={isValidCoordinate(shot.x) ? shot.x * scaleX : 0}
                cy={isValidCoordinate(shot.y) ? shot.y * scaleY : 0}
                r="4"
                fill={shot.runs > 0 ? "green" : "red"}
                className={styles.shotMarker}
                data-tip={`${shot.zone}: ${shot.runs} runs`}
              />
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
};

export default WagonWheel;
