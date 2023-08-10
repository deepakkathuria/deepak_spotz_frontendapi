import React from "react";
import NavBarSec from "../../components/scorePage/NavBarSec";
import UpdatesSound from "../../components/common/UpdatesSound";
import NavSeries from "../../components/series/NavSeries";
import SeriesList from "../../components/series/SeriesList";
import styles from "./cricketSeries.module.css";
import PostListBar from "../../components/common/PostListBar";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <NavBarSec />
        <div className={styles.seriesPage}>
          <div style={{ marginTop: "2rem" }} className={styles.soundUpdateDiv}>
            <UpdatesSound />
          </div>
          <div className={styles.containerSeriesMain}>
            <div className="left">
              <div
                style={{ marginTop: "1.5rem" }}
                className="navBarSeriesInside"
              >
                <NavSeries />
              </div>
              <div style={{ marginTop: "1rem" }} className="seriesListDiv">
                <SeriesList />
              </div>

              <div style={{ marginTop: "1rem" }} className="seriesListDiv">
                <SeriesList />
              </div>

              <div style={{ marginTop: "1rem" }} className="seriesListDiv">
                <SeriesList />
              </div>
            </div>
            <div className={styles.right}>
              <PostListBar category="cricket" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
