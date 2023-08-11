import React from "react";
import styles from "./PlayerInfoTable.module.css";

const PlayerInfoTable = (props) => {
  // console.log(props?.name,'nameeeeeeeeeeeeee')
  return (
    <>
      <div className={styles.tableHead}>
        <div className={styles.left}>
          <div className={styles.item}>
            <div className={styles.title}>Full Name</div>
            <div className={styles.value}>{props?.name}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Short Name</div>
            <div className={styles.value}>{props?.short_name}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Birth date</div>
            <div className={styles.value}>{props?.dob}</div>
          </div>

          {/* <div className={styles.item}>
            <div className={styles.title}>Facebook</div>
            <div className={styles.value}>{props?.facebook_profile}</div>
          </div> */}

          {/* <div className={styles.item}>
            <div className={styles.title}>Twitter</div>
            <div className={styles.value}>{props?.twitter_profile}</div>
          </div> */}

          {/* <div className={styles.item}>
            <div className={styles.title}>Instagram</div>
            <div className={styles.value}>{props?.instagram_profile}</div>
          </div> */}
          <div className={styles.item}>
            <div className={styles.title}>Nationality</div>
            <div className={styles.value}>{props?.nationality}</div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.item}>
            <div className={styles.title}>Birth place</div>
            <div className={styles.value}>{props?.birthplace}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Playing role</div>
            <div className={styles.value}>{props?.playing_role}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Batting style</div>
            <div className={styles.value}>{props?.batting_style}</div>
          </div>

          <div className={styles.item}>
            <div className={styles.title}>Bowling style</div>
            <div className={styles.value}>{props?.bowling_style}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerInfoTable;
