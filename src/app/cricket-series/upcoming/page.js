import React from "react";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import UpdatesSound from "../../../components/common/UpdatesSound";
import NavSeries from "../../../components/series/NavSeries";
import SeriesList from "../../../components/series/SeriesList";
import styles from "../cricketSeries.module.css";
import PostListBar from "../../../components/common/PostListBar";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchSeriesList = async () => {
  const res = await fetch(
    `${baseUrl}/competitions?per_page=30&&paged=1&status=fixture&token=${key}`
  );

  const data = await res.json();
  return data;
};

const page = async () => {
  const seriesList = await fetchSeriesList();
  //   console.log(seriesList.response, "seriesListtttttttttttttttttttt");
  return (
    <>
      <div className={styles.container}>
        <NavBarSec active="series" />
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
                <NavSeries active="upcoming" />
              </div>
              <div style={{ marginTop: "1rem" }} className="seriesListDiv">
                <SeriesList
                  title="Series List"
                  data={seriesList?.response || []}
                />
              </div>

              {/* <div style={{ marginTop: "1rem" }} className="seriesListDiv">
                <SeriesList />
              </div> */}

              {/* <div style={{ marginTop: "1rem" }} className="seriesListDiv">
                <SeriesList />
              </div> */}
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
