import React from "react";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import UpdatesSound from "../../../components/common/UpdatesSound";
import NavSeries from "../../../components/series/NavSeries";
import SeriesList from "../../../components/series/SeriesList";
import styles from "../cricketSeries.module.css";
import PostListBar from "../../../components/common/PostListBar";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
import HeaderBox2 from "@/components/common/HeaderBox2";
const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

const fetchSeriesList = async () => {
  const res = await fetch(
    `${baseUrl}/competitions?per_page=30&&paged=1&status=result&token=${key}`,
    { next: { revalidate: 30 } }
  );

  const data = await res.json();
  return data;
};

export const metadata = {
  title: "Recent Cricket Series - International, Domestic, T20 & T10 Series",
  description:
    "Check schedule of recent cricket series of International, Domestic & others T20, T10 series on SportzWiki.",
};

const page = async () => {
  const seriesList = await fetchSeriesList();
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricket Series`,
      url: "/cricket-series",
    },
    {
      name: `Recent`,
      // url: "/cricket-series/recent",
    },
  ];
  //   console.log(seriesList.response, "seriesListtttttttttttttttttttt");
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "Home",
            item: "sportzwiki.com",
          },
          {
            position: 2,
            name: breadcrumbs[1]?.name,
            item: `${site_url}${breadcrumbs[1]?.url}`,
          },
          {
            position: 3,
            name: breadcrumbs[2]?.name,
            item: `${site_url}${breadcrumbs[2]?.url}`,
          },
          // {
          //   position: 4,
          //   name: breadcrumbs[3]?.name,
          //   item: `${site_url}${breadcrumbs[3]?.url}`,
          // },
        ]}
      />
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <NavBarSec active="series" />
        <div className={styles.seriesPage}>
          <div style={{ marginTop: "1rem" }} className="breadcrumb">
            <Breadcrumb breadcrumbsObj={breadcrumbs} />
          </div>
          <div style={{ marginTop: "2rem" }} className={styles.soundUpdateDiv}>
            <UpdatesSound />
          </div>
          <h1 style={{ marginTop: "1rem" }}>Recent Cricket Series</h1>
          <div className={styles.containerSeriesMain}>
            <div className="left">
              <div
                style={{ marginTop: "1.5rem" }}
                className="navBarSeriesInside"
              >
                <NavSeries active="recent" />
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
              {/* <div style={{ marginTop: "2rem" }} className="header">
                <HeaderBox2
                  header="SportzWiki Media"
                  content="It is an honour to introduce—Sportzwiki – sports is life, is one of the leading online sports mediums across the globe. The digital platform over the years has grabbed the attention of an audience worldwide.From the cricketing ground to the badminton court—the dedicated team at Sportzwiki has been always on the lookout to provide insights, pre and post-match stuff and plenty with 24/7 window."
                />
                <FaqLive />
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
