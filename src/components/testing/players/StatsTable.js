import React from "react";
import styles from "./StatsTable.module.css";

const StatsTable = (props) => {
  // console.log(props?.data.test.match_id);
  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.tableTitle}>{props?.type}</div>
        <div className={styles.tableBody}>
          <div className={styles.tableHead}>
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
              <div className={styles.tableDataBody}>
                {props?.data?.test?.matches || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.innings || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.notout || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.highest || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.average || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.strike || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.run100 || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.run50 || "-"}
              </div>
            </div>

            <div className={styles.tableRowBody}>
              <div className={styles.tableDataBody}>ODI</div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.matches || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.innings || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.notout || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.highest || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.average || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.strike || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.run100 || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.run50 || "-"}
              </div>
            </div>

            <div className={styles.tableRowBody}>
              <div className={styles.tableDataBody}>T20i</div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.matches || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.innings || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.notout || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.highest || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.average || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.strike || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.run100 || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.run50 || "-"}
              </div>
            </div>

            <div className={styles.tableRowBody}>
              <div className={styles.tableDataBody}>T20</div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.matches || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.innings || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.notout || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.highest || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.average || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.strike || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.run100 || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.run50 || "-"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTable;
