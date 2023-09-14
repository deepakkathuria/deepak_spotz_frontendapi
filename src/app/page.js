import React, { Suspense } from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
import FaqLive from "@/components/common/FaqLive";
import UpdatesSound from "@/components/common/UpdatesSound";
import CardSlider from "@/components/home/CardSlider";
import Link from "next/link";
import Image from "next/image";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

// function getCurrentDate() {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-11, so we add 1
//   const day = String(today.getDate()).padStart(2, "0");

//   return `${year}-${month}-${day}`;
// }

// const formattedDate = `${getCurrentDate()}_${getCurrentDate()}`;

function getDateWithOffset(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset); // Add the offset to the current date

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-11, so we add 1
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = `${getDateWithOffset(-1)}_${getDateWithOffset(1)}`;

// console.log(`${base_url}/matches?token=${key}&date=${formattedDate}`);
const getData = async () => {
  const res = await fetch(
    `${base_url}/matches?token=${key}&date=${formattedDate}&per_page=50`,

    // cache: "no-store",
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  // console.log(data, "datatatatta");
  return data.response.items;
};

export async function generateMetadata() {
  const siteURL = "https://sportzwiki.com";

  return {
    title: `Sports News: Get Latest News on Football, Cricket, Tennis, WWE, E-Sports`,
    description: `Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.`,
    alternates: {
      canonical: `${siteURL}`,
    },
    robots: `index, follow`,
  };
}

const page = async () => {
  const data = await getData();

  // function customSort(a, b) {
  //   const statusOrder = { 3: 0, 1: 1, 2: 2, 4: 3 };
  //   const statusA = a.status.toString();
  //   const statusB = b.status.toString();

  //   return statusOrder[statusA] - statusOrder[statusB];
  // }

  // // const sortedResponses = data.slice().sort(customSort);
  // const sortedResponses = (data ?? []).slice().sort(customSort);

  function customSort(a, b) {
    const statusOrder = { 3: 0, 1: 1, 2: 2, 4: 3 };

    // Check if title contains 'India' (case-insensitive)
    const aContainsIndia = a.title && a.title.toLowerCase().includes("india");
    const bContainsIndia = b.title && b.title.toLowerCase().includes("india");

    // If both have 'India' or neither have it, sort by status.
    // If only one has 'India', that one comes first.
    if (aContainsIndia && bContainsIndia) {
      return 0;
    } else if (aContainsIndia) {
      return -1;
    } else if (bContainsIndia) {
      return 1;
    }

    const statusA = a.status.toString();
    const statusB = b.status.toString();

    return statusOrder[statusA] - statusOrder[statusB];
  }

  const sortedResponses = (data ?? []).slice().sort(customSort);

  return (
    <>
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className="scores">
          {/* <Suspense fallback={"Loading..."}> */}
          <UpdatesSound />
          <div className={styles.quickLinks}>
            <div className={styles.quickLinksHeading}>
              {/* <p>ASIA CUP 2023</p> */}
              <Image
                src={
                  "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1694670174/asia-cup_aotqdl.svg"
                }
                width={0}
                height={0}
                alt=""
                style={{ width: "65px", height: "auto" }}
              ></Image>
              <div className={styles.triangle}>
                <Image
                  src={"/gaurav/arrowRight.svg"}
                  width={0}
                  height={0}
                  alt=""
                  style={{ width: "25px", height: "auto" }}
                ></Image>
              </div>
            </div>
            <ul className={styles.items}>
              {/* <ul> */}
              <li>
                <a href="/live-cricket-scores/ind-vs-ban-asia-cup-2023-round-2-super-4s-a2-v-b2-65566/commentary">
                  Ind vs Ban
                </a>
              </li>
              <li>|</li>
              <li>
                <a href="/cricket-series/asia-cup-127811/matches">Schedule</a>
              </li>
              <li>|</li>
              <li>
                <a href="/cricket-series/asia-cup-127811/matches">Results</a>
              </li>
              <li>|</li>
              <li>
                <a href="/asia-cup-2023">News</a>
              </li>
              {/* </ul> */}
            </ul>
            {/* <div className={styles.arrowLine}></div> */}
            {/* <a href="#">Asia Cup 2023</a> */}
          </div>
          <div style={{ marginTop: "2rem" }} className="slider">
            <div className={styles.scoreCardMatchTypeSelector}>
              <div className={styles.matchTimingSelector}>
                <button
                  className={`${styles.matchTimingSelectorButton} ${styles.selected}`}
                >
                  All
                </button>
                <button className={`${styles.matchTimingSelectorButton}`}>
                  <Link href={"/live-cricket-scores"}>Live</Link>
                </button>
                <button className={styles.matchTimingSelectorButton}>
                  <Link href={"/live-cricket-scores/completed"}>Recent</Link>
                </button>
                <button className={styles.matchTimingSelectorButton}>
                  <Link href={"/live-cricket-scores/upcoming"}>Upcoming</Link>
                </button>
              </div>
            </div>
            {data && <CardSlider cards={sortedResponses} />}
          </div>
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
          {/* <NewsSection
            name="FANTASY CRICKET TIPS"
            id="150559"
            slug="fantasy-cricket"
          /> */}
          {/* </Suspense> */}
        </div>
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
