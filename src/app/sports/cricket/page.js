import React, { Suspense } from "react";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import NavBarSec from "@/components/scorePage/NavBarSec";
import styles from "./sports.module.css";
import NewsSection from "@/components/common/NewsSection";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import HeaderBox2 from "@/components/common/HeaderBox2";
import FaqLive from "@/components/common/FaqLive";
import CardSlider from "@/components/home/CardSlider";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-11, so we add 1
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = `${getCurrentDate()}_${getCurrentDate()}`;

const getData = async () => {
  const res = await fetch(
    `${base_url}/matches?token=${key}&date=${formattedDate}`,

    // cache: "no-store",
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  // console.log(data, "datatatatta");
  return data.response.items;
};

const page = async () => {
  const data = await getData();
  // console.log(data, "datatatattt");

  function customSort(a, b) {
    const statusOrder = { 3: 0, 1: 1, 2: 2, 4: 3 };
    const statusA = a.status.toString();
    const statusB = b.status.toString();

    return statusOrder[statusA] - statusOrder[statusB];
  }

  // const sortedResponses = data.slice().sort(customSort);
  const sortedResponses = (data ?? []).slice().sort(customSort);

  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Sports`,
      // url: "/",
    },
    {
      name: `Latest Cricket News`,
      // url: "/sports/cricket",
    },
  ];
  return (
    <>
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <NavBarSec active="home" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className="heading" style={{ marginTop: "1rem" }}>
          <h1>Latest Cricket News</h1>
        </div>
        {/* <Suspense> */}
        <div className={styles.scores}>
          {/* <LiveScoreSection /> */}
          <div style={{ marginTop: "2rem" }} className="slider">
            {data && <CardSlider cards={sortedResponses} />}
          </div>
        </div>
        {/* </Suspense> */}
        <div className={styles.newsSection}>
          <NewsSection name="LATEST CRICKET NEWS" id="2" slug="cricket" />
          {/* <NewsSection name="IPL 2023" id="3" slug="cricket" />
          <NewsSection name="ASIA CUP 2023" id="3" slug="cricket" />
          <NewsSection name="EDITOR's CHOICE" id="3" slug="cricket" /> */}
        </div>
        {/* <HeaderBox2
          header="SportzWiki Media"
          content="It is an honour to introduce—Sportzwiki – sports is life, is one of the leading online sports mediums across the globe. The digital platform over the years has grabbed the attention of an audience worldwide.From the cricketing ground to the badminton court—the dedicated team at Sportzwiki has been always on the lookout to provide insights, pre and post-match stuff and plenty with 24/7 window."
        /> */}
        {/* <div className="header">
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
        <FaqLive /> */}
      </div>
    </>
  );
};

export default page;
