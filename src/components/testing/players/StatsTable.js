import React from "react";
import styles from "./StatsTable.module.css";

const StatsTable = () => {
  return (
    <>
      <div className="tableContainer">
        <div className={styles.tableTitle}>Batting</div>
        <div className="tableBody">
          <div className="tableHead">
            <div className={styles.tableRow}>
              <div className={styles.tableData}>Format</div>
              <div className={styles.tableData}>MAT</div>
              <div className={styles.tableData}>INNS</div>
              <div className={styles.tableData}>NO</div>
              <div className={styles.tableData}>RUNS</div>
              <div className={styles.tableData}>HS</div>
              <div className={styles.tableData}>AVG</div>
              <div className={styles.tableData}>BF</div>
              <div className={styles.tableData}>SR</div>
              <div className={styles.tableData}>100s</div>
              <div className={styles.tableData}>50s</div>
            </div>
          </div>
          <div className={styles.tableDataAll}>
            <div className={styles.tableRowBody}>
              <div className={styles.tableDataBody}>Test</div>
              <div className={styles.tableDataBody}>102</div>
              <div className={styles.tableDataBody}>262</div>
              <div className={styles.tableDataBody}>102</div>
              <div className={styles.tableDataBody}>223</div>
              <div className={styles.tableDataBody}>223</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
            </div>

            <div className={styles.tableRowBody}>
              <div className={styles.tableDataBody}>Test</div>
              <div className={styles.tableDataBody}>102</div>
              <div className={styles.tableDataBody}>262</div>
              <div className={styles.tableDataBody}>102</div>
              <div className={styles.tableDataBody}>223</div>
              <div className={styles.tableDataBody}>223</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
            </div>

            <div className={styles.tableRowBody}>
              <div className={styles.tableDataBody}>Test</div>
              <div className={styles.tableDataBody}>102</div>
              <div className={styles.tableDataBody}>262</div>
              <div className={styles.tableDataBody}>102</div>
              <div className={styles.tableDataBody}>223</div>
              <div className={styles.tableDataBody}>223</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
              <div className={styles.tableDataBody}>233</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTable;
