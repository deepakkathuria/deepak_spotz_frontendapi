import React from "react";
import styles from "./SeriesList.module.css";
import Link from "next/link";
import slugify from "slugify";

const SeriesList = (props) => {
  // console.log(props.data, "dataaaaaaaaaaaaaaaaaaaaaaaaa");
  return (
    <>
      <table className={styles.seriesListTable}>
        <thead className={styles.seriesListHead}>
          <tr className={styles.seriesListHeadRow}>
            <td className={styles.seriesListHeadData}>
              {props?.title || "Series List"}
            </td>
          </tr>
        </thead>
        <tbody className={styles.seriesListBody}>
          {props?.data?.items?.map((seriesName, index) => {
            return (
              <tr key={index} className={styles.seriesListBodyRow}>
                <td className={styles.seriesListBodyData}>
                  <Link
                    href={`/cricket-series/${slugify(seriesName?.title, {
                      remove: /[*+~.()'"!:@]/g,
                    }).toLowerCase()}-${seriesName?.cid}`}
                  >
                    {seriesName?.title || ""}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SeriesList;
