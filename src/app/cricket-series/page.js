import React from "react";
import NavBarSec from "../../components/scorePage/NavBarSec";
import UpdatesSound from "../../components/common/UpdatesSound";
import NavSeries from "../../components/series/NavSeries";
import SeriesList from "../../components/series/SeriesList";
import styles from "./cricketSeries.module.css";
import PostListBar from "../../components/common/PostListBar";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchSeriesList = async () => {
  const res = await fetch(
    `${baseUrl}/competitions?per_page=30&&paged=1&status=live&token=${key}`,
    { next: { revalidate: 30 } }
  );

  const data = await res.json();
  return data;
};

const page = async () => {
  const seriesList = await fetchSeriesList();
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET SERIES`,
      url: "/cricket-series",
    },
    // {
    //   name: `COMPLETED`,
    //   url: "/cricket-series/completed",
    // },
  ];
  //   console.log(seriesList.response, "seriesListtttttttttttttttttttt");
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "HOME",
            item: "sportzwiki.com",
          },
          {
            position: 2,
            name: breadcrumbs[1]?.name,
            item: `${site_url}${breadcrumbs[1]?.url}`,
          },
        ]}
      />
      <OrganisationLd />
      <div className={styles.container}>
        <NavBarSec active="series" />
        <div className={styles.seriesPage}>
          <div style={{ marginTop: "1rem" }} className="breadcrumb">
            <Breadcrumb breadcrumbsObj={breadcrumbs} />
          </div>
          <div style={{ marginTop: "2rem" }} className={styles.soundUpdateDiv}>
            <UpdatesSound />
          </div>
          <div className={styles.containerSeriesMain}>
            <div className="left">
              <div
                style={{ marginTop: "1.5rem" }}
                className="navBarSeriesInside"
              >
                <NavSeries active="live" />
              </div>
              <div style={{ marginTop: "1rem" }} className="seriesListDiv">
                <SeriesList
                  title="Series List"
                  data={seriesList?.response || []}
                />
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
