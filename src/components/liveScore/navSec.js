import React from "react";
import styles from "./navSec.module.css";
import Link from "next/link";

const NavSec = (props) => {
  return (
    <>
      <div className={styles.container}>
        <Link href={`/live-cricket-scores/${props?.seriesName}`}>
          <p className={props?.active === "info" ? `${styles.active}` : ""}>
            Info
          </p>
        </Link>
        <Link href={`/live-cricket-scores/${props?.seriesName}/commentary`}>
          <p
            className={props?.active === "commentary" ? `${styles.active}` : ""}
          >
            Commentary
          </p>
        </Link>
        {/* <Link href={`/live-cricket-scores/${props?.seriesName}/live-blog`}>
          <p
            className={props?.active === "live_blog" ? `${styles.active}` : ""}
          >
            Live Blog
          </p>
        </Link> */}
        <Link
          href={`/live-cricket-scores/${props?.seriesName}/full-scorecard/`}
        >
          <p
            className={props?.active === "scorecard" ? `${styles.active}` : ""}
          >
            Scorecard
          </p>
        </Link>
        <Link href={`/live-cricket-scores/${props?.seriesName}/teams`}>
          <p className={props?.active === "teams" ? `${styles.active}` : ""}>
            Teams
          </p>
        </Link>
        {/* <Link href={`/live-cricket-scores/${props?.seriesName}/videos`}>
          <p className={props?.active === "videos" ? `${styles.active}` : ""}>
            Videos
          </p>
        </Link> */}
        <Link href={`/live-cricket-scores/${props?.seriesName}/news`}>
          <p className={props?.active === "news" ? `${styles.active}` : ""}>
            News
          </p>
        </Link>
        {/* <Link href={`/live-cricket-scores/${props?.seriesName}/photos`}>
          <p className={props?.active === "photos" ? `${styles.active}` : ""}>
            Photos
          </p>
        </Link> */}

        {/* <Link href={`/live-cricket-scores/${props?.seriesName}/wagon-wheel`}>
          <p className={props?.active === "wagon" ? `${styles.active}` : ""}>
            Wagon Wheel
          </p>
        </Link> */}

        {/* <Link href={`/live-cricket-scores/${props?.seriesName}/manhattan`}>
          <p
            className={props?.active === "manhattan" ? `${styles.active}` : ""}
          >
            Manhattan
          </p>
        </Link> */}
      </div>
    </>
  );
};

export default NavSec;
