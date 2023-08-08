import React from "react";
import styles from "./StatsTeamTable.module.css";

const StatsTeamTable = () => {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div className={styles.tableDataHead}>Player</div>
          <div className={styles.tableDataHead}>Match</div>
          <div className={styles.tableDataHead}>Innings</div>
          <div className={styles.tableDataHead}>Runs</div>
          <div className={styles.tableDataHead}>Average</div>
          <div className={styles.tableDataHead}>Strike Rate</div>
          <div className={styles.tableDataHead}>4s</div>
          <div className={styles.tableDataHead}>6s</div>
        </div>
        <div className={styles.tableBody}>
          <div className={styles.tableRow}>
            <div className={styles.tableRowData}>1. Mithali Raj</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>61</div>
            <div className={styles.tableRowData}>61.00</div>
            <div className={styles.tableRowData}>87.14</div>
            <div className={styles.tableRowData}>6</div>
            <div className={styles.tableRowData}>1</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.tableRowData}>1. Mithali Raj</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>61</div>
            <div className={styles.tableRowData}>61.00</div>
            <div className={styles.tableRowData}>87.14</div>
            <div className={styles.tableRowData}>6</div>
            <div className={styles.tableRowData}>1</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.tableRowData}>1. Mithali Raj</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>61</div>
            <div className={styles.tableRowData}>61.00</div>
            <div className={styles.tableRowData}>87.14</div>
            <div className={styles.tableRowData}>6</div>
            <div className={styles.tableRowData}>1</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.tableRowData}>1. Mithali Raj</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>61</div>
            <div className={styles.tableRowData}>61.00</div>
            <div className={styles.tableRowData}>87.14</div>
            <div className={styles.tableRowData}>6</div>
            <div className={styles.tableRowData}>1</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.tableRowData}>1. Mithali Raj</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>61</div>
            <div className={styles.tableRowData}>61.00</div>
            <div className={styles.tableRowData}>87.14</div>
            <div className={styles.tableRowData}>6</div>
            <div className={styles.tableRowData}>1</div>
          </div>

          <div className={styles.tableRow}>
            <div className={styles.tableRowData}>1. Mithali Raj</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>1</div>
            <div className={styles.tableRowData}>61</div>
            <div className={styles.tableRowData}>61.00</div>
            <div className={styles.tableRowData}>87.14</div>
            <div className={styles.tableRowData}>6</div>
            <div className={styles.tableRowData}>1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTeamTable;
