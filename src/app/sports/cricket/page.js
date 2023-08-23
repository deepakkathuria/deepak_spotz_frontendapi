import React, { Suspense } from "react";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import NavBarSec from "@/components/scorePage/NavBarSec";
import styles from "./sports.module.css";
import NewsSection from "@/components/common/NewsSection";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
import HeaderBox2 from "@/components/common/HeaderBox2";
import FaqLive from "@/components/common/FaqLive";

const page = () => {
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Sports`,
      url: "/",
    },
    {
      name: `Cricket`,
      // url: "/sports/cricket",
    },
  ];
  return (
    <>
      <OrganisationLd />
      <div className={styles.container}>
        <NavBarSec active="home" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className="heading" style={{ marginTop: "1rem" }}>
          <h1>Latest Cricket News</h1>
        </div>
        <Suspense>
          <div className={styles.scores}>
            <LiveScoreSection />
          </div>
        </Suspense>
        <div className={styles.newsSection}>
          <NewsSection name="TRENDING NEWS" id="3" slug="cricket" />
          {/* <NewsSection name="IPL 2023" id="3" slug="cricket" />
          <NewsSection name="ASIA CUP 2023" id="3" slug="cricket" />
          <NewsSection name="EDITOR's CHOICE" id="3" slug="cricket" /> */}
        </div>
        {/* <HeaderBox2
          header="SportzWiki Media"
          content="It is an honour to introduce—Sportzwiki – sports is life, is one of the leading online sports mediums across the globe. The digital platform over the years has grabbed the attention of an audience worldwide.From the cricketing ground to the badminton court—the dedicated team at Sportzwiki has been always on the lookout to provide insights, pre and post-match stuff and plenty with 24/7 window."
        /> */}
        <div className="header">
          <h2 style={{ fontSize: "1.4rem" }}>SportzWiki Media</h2>
          <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
            It is an honour to introduce—Sportzwiki – sports is life, is one of
            the leading online sports mediums across the globe. The digital
            platform over the years has grabbed the attention of an audience
            worldwide.From the cricketing ground to the badminton court—the
            dedicated team at Sportzwiki has been always on the lookout to
            provide insights, pre and post-match stuff and plenty with 24/7
            window.
          </p>
        </div>
        <FaqLive />
      </div>
    </>
  );
};

export default page;
