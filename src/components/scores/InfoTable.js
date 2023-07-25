import React from "react";
import styles from "./InfoTable.module.css";

const InfoTable = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.title}>Match</div>
          <div className={styles.details}>{props?.matchFormat}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Series</div>
          <div className={styles.details}>{props?.series}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Player of the match</div>
          <div className={styles.details}>-</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Date</div>
          <div className={styles.details}>{props?.date}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Time</div>
          <div className={styles.details}>{props?.time}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Venue</div>
          <div className={styles.details}>{props.venueName}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Stadium</div>
          <div className={styles.details}>{props?.stadium}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>City</div>
          <div className={styles.details}>{props?.venueLocation}</div>
        </div>

        {/* <div className={styles.row}>
          <div className={styles.title}>End</div>
          <div className={styles.details}>Dubai Emirates End</div>
        </div> */}

        <div className={styles.row}>
          <div className={styles.title}>Host</div>
          <div className={styles.details}>{props.venueCountry}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Umpire</div>
          <div className={styles.details}>{props?.umpires}</div>
        </div>

        <div className={styles.row}>
          <div className={styles.title}>Referee</div>
          <div className={styles.details}>{props?.referee}</div>
        </div>
      </div>
    </>
  );
};

export default InfoTable;
