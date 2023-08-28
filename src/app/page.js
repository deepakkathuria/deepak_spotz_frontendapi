import React, { Suspense } from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
import FaqLive from "@/components/common/FaqLive";
import UpdatesSound from "@/components/common/UpdatesSound";
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
    { next: { revalidate: 30 } }
  );
  const data = await res.json();
  return data.response.items;
};

export async function generateMetadata() {
  const siteURL = "https://sportzwiki.com/";

  return {
    title: `Sports News: Get Latest News on Football, Cricket, Tennis, WWE, E-Sports`,
    description: `Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.`,
    alternates: {
      canonical: `${siteURL}`,
    },
    robots:`index, follow`
  };
}

const page = async () => {
  const data = await getData();

  function customSort(a, b) {
    const statusOrder = { 3: 0, 1: 1, 2: 2, 4: 3 };
    const statusA = a.status.toString();
    const statusB = b.status.toString();

    return statusOrder[statusA] - statusOrder[statusB];
  }

  const sortedResponses = data.slice().sort(customSort);

  return (
    <>
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className="scores">
          {/* <Suspense fallback={"Loading..."}> */}
          <UpdatesSound />
          <div style={{ marginTop: "2rem" }} className="slider">
            <CardSlider cards={sortedResponses} />
          </div>
          {/* </Suspense> */}
        </div>
        <NewsSectionLatest />

        <div className={styles.newsSectionDiv}>
          {/* <Suspense fallback="Loading...."> */}
          <NewsSection name="CRICKET" id="2" slug="cricket" />
          {/* </Suspense> */}
          {/* <Suspense fallback="Loading....">  */}
          <NewsSection name="WWE" id="4" slug="wwe" />
          {/* </Suspense> */}
          {/* <Suspense fallback="Loading...."> */}
          <NewsSection name="FOOTBALL" id="3" slug="football" />
          {/* </Suspense> */}
          {/* <Suspense fallback="Loading...."> */}
          <NewsSection
            name="FANTASY CRICKET TIPS"
            id="150559"
            slug="fantasy-cricket"
          />
          {/* </Suspense> */}
        </div>
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
