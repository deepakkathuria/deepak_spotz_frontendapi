import React from "react";
import styles from "./StatsTable.module.css";

const StatsTableBowling = (props) => {
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
              <div className={styles.tableData}>BALL</div>
              <div className={styles.tableData}>OV.</div>
              <div className={styles.tableData}>RUN</div>
              <div className={styles.tableData}>WCKT</div>
              <div className={styles.tableData}>ECON</div>
              <div className={styles.tableData}>W4</div>
              <div className={styles.tableData}>W5</div>
              <div className={styles.tableData}>W10</div>
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
                {props?.data?.test?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.overs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.wickets || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.econ || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.wicket4i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.wicket5i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.test?.wicket10m || "-"}
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
                {props?.data?.odi?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.overs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.wickets || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.econ || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.wicket4i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.wicket5i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.odi?.wicket10m || "-"}
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
                {props?.data?.t20i?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.overs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.wickets || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.econ || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.wicket4i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.wicket5i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20i?.wicket10m || "-"}
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
                {props?.data?.t20?.balls || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.overs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.runs || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.wickets || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.econ || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.wicket4i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.wicket5i || "-"}
              </div>
              <div className={styles.tableDataBody}>
                {props?.data?.t20?.wicket10m || "-"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsTableBowling;
