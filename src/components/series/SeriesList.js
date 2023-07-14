import React from "react";
import styles from "./SeriesList.module.css";

const SeriesList = () => {
  return (
    <>
      <table className={styles.seriesListTable}>
        <thead className={styles.seriesListHead}>
          <tr className={styles.seriesListHeadRow}>
            <td className={styles.seriesListHeadData}>International Matches</td>
          </tr>
        </thead>
        <tbody className={styles.seriesListBody}>
          <tr className={styles.seriesListBodyRow}>
            <td className={styles.seriesListBodyData}>
              Sri lanka Tour of india
            </td>
          </tr>
          <tr className={styles.seriesListBodyRow}>
            <td className={styles.seriesListBodyData}>
              Sri lanka Tour of india
            </td>
          </tr>
          <tr className={styles.seriesListBodyRow}>
            <td className={styles.seriesListBodyData}>
              Sri lanka Tour of india
            </td>
          </tr>
          <tr className={styles.seriesListBodyRow}>
            <td className={styles.seriesListBodyData}>
              Sri lanka Tour of india
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SeriesList;
