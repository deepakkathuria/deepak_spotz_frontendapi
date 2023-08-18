import React, { Suspense } from "react";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import NavBarSec from "@/components/scorePage/NavBarSec";
import styles from "./sports.module.css";
import NewsSection from "@/components/common/NewsSection";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";

const page = () => {
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `SPORTS`,
      url: "/",
    },
    {
      name: `CRICKET`,
      url: "/sports/cricket",
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
      </div>
    </>
  );
};

export default page;
