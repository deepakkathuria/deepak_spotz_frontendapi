import React from "react";
import styles from "./TeamCountryNav.module.css";

const TeamCountryNav = (props) => {
  return (
    <>
      <div className={styles.TeamCountryNav}>
        <ul className={styles.TeamCountryNavUl}>
          <li
            className={
              props?.active === "main"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            <a href={`/cricket-team/${props.currentCountry}/`}>About</a>
          </li>
          {/* <li
            className={
              props?.active === "overview"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            <a href={`/cricket-team/${props.currentCountry}/overview`}>
              Overview
            </a>
          </li> */}
          <li
            className={
              props?.active === "schedule"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            <a href={`/cricket-team/${props.currentCountry}/schedule/`}>
              Schedule & Results
            </a>
          </li>
          <li
            className={
              props?.active === "news"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            <a href={`/cricket-team/${props.currentCountry}/news/`}>News</a>
          </li>
          {/* <li
            className={
              props?.active === "stats"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            <a href={`/cricket-team/${props.currentCountry}/stats`}>Stats</a>
          </li> */}
          {/* <li
            className={
              props?.active === "squads"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            <a href={`/cricket-team/${props.currentCountry}/squads`}>Squads</a>
          </li> */}
          {/* <li
            className={
              props?.active === "videos"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            Videos
          </li> */}
          {/* <li
            className={
              props?.active === "photos"
                ? `${styles.TeamCountryNavLi} ${styles.active}`
                : `${styles.TeamCountryNavLi}`
            }
          >
            Photos
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default TeamCountryNav;
