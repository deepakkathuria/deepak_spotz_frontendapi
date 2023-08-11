import React from "react";
import styles from "./playersNav.module.css";
import Link from "next/link";

const PlayersNav = (props) => {
  return (
    <>
      <ul className={styles.nav}>
        <Link href={`/cricketers/${props.country}/${props.player}`}>
          <li
            className={props?.active === "overview" ? `${styles.active}` : ""}
          >
            Overview
          </li>
        </Link>
        <Link href={`/cricketers/${props.country}/${props.player}/stats`}>
          <li className={props?.active === "stats" ? `${styles.active}` : ""}>
            Stats
          </li>
        </Link>
        {/* <Link href={`/cricketers/${props.country}/${props.player}/news`}>
        <li className={props?.active==='news'?`${styles.active}`:''}>News</li>
        </Link>
        <Link href={`/cricketers/${props.country}/${props.player}/videos`}>
        <li className={props?.active==='videos'?`${styles.active}`:''}>Videos</li>
        </Link>
        <Link href={`/cricketers/${props.country}/${props.player}/photos`}>
        <li className={props?.active==='photos'?`${styles.active}`:''}>Photos</li>
        </Link> */}
      </ul>
    </>
  );
};

export default PlayersNav;
