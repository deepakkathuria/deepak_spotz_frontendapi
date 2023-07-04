import React from "react";
import styles from "./CommentaryBox.module.css";

const CommentaryBox = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.scoreOver}>
          <div className={styles.over}>OV 19.6</div>
          <div className={styles.run}>2 Run</div>
        </div>
        <div className={styles.commentaryText}>
          <div className={styles.text}>
            Full. Usman Qadir eases a drive through the off side field for a
            couple of runs Full. Usman Qadir eases a drive through the off side
            field for a couple of runs Full. Usman Qadir eases a drive through
            the off side field for a couple of runs
          </div>
          <div className={styles.balls}>
            <h4>1</h4>
            <h4>2</h4>
            <h4>0</h4>
            <h4>4</h4>
            <h4>6</h4>
          </div>
        </div>
      </div>
      {/* <div>CommentaryBox</div> */}
    </>
  );
};

export default CommentaryBox;
