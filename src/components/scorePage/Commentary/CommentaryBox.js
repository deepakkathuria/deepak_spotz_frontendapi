import React from "react";
import styles from "./CommentaryBox.module.css";

const CommentaryBox = (props) => {
  // console.log(props.runsInOver, " : runsInOver");
  // console.log(props.eventType, "eventType");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scoreOver}>
          <div className={styles.over}>
            {props.over}.{props.ball ? props.ball : 0}
          </div>
          <div className={styles.run}>{props.run} Run</div>
        </div>
        <div className={styles.commentaryText}>
          <div className={styles.text}>{props?.text}</div>
          {/* <div className={styles.balls}>
            <h4>{props.last5Runs[0]}</h4>
            <h4>{props.last5Runs[1]}</h4>
            <h4>{props.last5Runs[2]}</h4>
            <h4>{props.last5Runs[3]}</h4>
            <h4>{props.last5Runs[4]}</h4>
          </div> */}
          <div>
            <div
              style={{ color: "red", fontWeight: "bold", fontSize: "1.3rem" }}
            >
              {props?.howOut || ""}
            </div>
            {props?.runsInOver && (
              <div
                style={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                {`Runs scored in over : ${props?.runsInOver}`}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div>CommentaryBox</div> */}
    </>
  );
};

export default CommentaryBox;
