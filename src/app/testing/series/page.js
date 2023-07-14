import React from "react";
import NavBarSec from "@/components/scorePage/NavBarSec";
import UpdatesSound from "@/components/common/UpdatesSound";
import NavSeries from "@/components/series/NavSeries";
import SeriesList from "@/components/series/SeriesList";
import styles from "./series.module.css";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div className={styles.seriesPage}>
          <div style={{ marginTop: "2rem" }} className={styles.soundUpdateDiv}>
            <UpdatesSound />
          </div>
          <div style={{ marginTop: "1.5rem" }} className="navBarSeriesInside">
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
      </div>
    </>
  );
};

export default page;
