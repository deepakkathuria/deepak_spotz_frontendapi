import React from "react";
import styles from "./TeamsTable.module.css";
import Image from "next/image";
import Link from "next/link";
import slugify from "slugify";

const TeamsTable = (props) => {
  // console.log(props?.data);
  return (
    <>
      <table className={styles.TeamsTableMain} suppressHydrationWarning>
        <thead className={styles.TeamsTableHead}>
          <tr className={styles.TeamsTableHeadTr}>
            <td className={styles.TeamsTableHeadTd}>
              {props?.name || "No Data Available"}
            </td>
          </tr>
        </thead>
        <tbody className={styles.TeamsTableBody} suppressHydrationWarning>
          {props?.data?.map((team, index) => {
            return (
              <Link
                key={index}
                href={`/cricket-team/${slugify(team?.title, {
                  remove: /[*+~.()'"!:@]/g,
                }).toLowerCase()}-${team?.tid}`}
              >
                <tr
                  className={styles.TeamsTableBodyTr}
                  suppressHydrationWarning
                >
                  <td className={styles.TeamsTableBodyTd}>
                    <div className={styles.logo} suppressHydrationWarning>
                      <Image
                        src={team?.logo_url}
                        height={0}
                        width={0}
                        style={{ height: "100%", width: "100%" }}
                        alt=""
                      />
                    </div>
                    <div suppressHydrationWarning className={styles.name}>
                      {team?.title}
                    </div>
                  </td>
                </tr>
              </Link>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TeamsTable;
