import React from "react";
import styles from "./TeamsTable.module.css";

const TeamsTable = () => {
  return (
    <>
      <table className={styles.TeamsTableMain}>
        <thead className={styles.TeamsTableHead}>
          <tr className={styles.TeamsTableHeadTr}>
            <td className={styles.TeamsTableHeadTd}>Test Teams</td>
          </tr>
        </thead>
        <tbody className={styles.TeamsTableBody}>
          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>India</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>Australia</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>England</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>South Africa</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>West Indies</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>New Zealand</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>Pakistan</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>Sri lanka</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>Zimbabwe</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>India</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>India</div>
            </td>
          </tr>

          <tr className={styles.TeamsTableBodyTr}>
            <td className={styles.TeamsTableBodyTd}>
              <div className={styles.logo}></div>
              <div className={styles.name}>India</div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TeamsTable;
