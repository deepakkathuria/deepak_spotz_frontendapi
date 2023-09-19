import React from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
import UpdatesSound from "@/components/common/UpdatesSound";
import CardSlider from "@/components/home/CardSlider";
import Link from "next/link";
import Image from "next/image";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

function getDateWithOffset(offset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offset);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = `${getDateWithOffset(-1)}_${getDateWithOffset(1)}`;

const getData = async () => {
  const res = await fetch(
    `${base_url}/matches?token=${key}&date=${formattedDate}&per_page=50`,

    { next: { revalidate: 60 } }
  );
  const data = await res.json();
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

  function customSort(a, b) {
    const statusOrder = { 3: 0, 1: 1, 2: 2, 4: 3 };

    const aContainsIndia = a.title && a.title.toLowerCase().includes("india");
    const bContainsIndia = b.title && b.title.toLowerCase().includes("india");

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
          <UpdatesSound />
          <div className={styles.quickLinks}>
            <div className={styles.quickLinksHeading}>
              {/* <Image
                src={
                  "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1695101726/world-cup_aqepah.svg"
                }
                width={0}
                height={0}
                alt=""
                style={{
                  width: "20px",
                  height: "auto",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              ></Image> */}
              <div className="eventName" style={{ marginRight: "1rem" }}>
                ICC World Cup
              </div>
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
              {/* <li>
                <a href="/live-cricket-scores/ind-vs-ban-asia-cup-2023-round-2-super-4s-a2-v-b2-65566/commentary/">
                  IND vs BAN
                </a>
              </li> */}
              {/* <li>|</li> */}
              <li>
                <a href="/cricket-series/icc-mens-world-cup-warm-up-matches-127865/matches">
                  Schedule
                </a>
              </li>
              <li>|</li>
              <li>
                <a href="/cricket-series/icc-mens-world-cup-warm-up-matches-127865/matches">
                  Results
                </a>
              </li>
              <li>|</li>
              <li>
                <a href="/cricket/">News</a>
              </li>
            </ul>
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
                  <Link href={"/live-cricket-scores/"}>Live</Link>
                </button>
                <button className={styles.matchTimingSelectorButton}>
                  <Link href={"/live-cricket-scores/completed/"}>Recent</Link>
                </button>
                <button className={styles.matchTimingSelectorButton}>
                  <Link href={"/live-cricket-scores/upcoming/"}>Upcoming</Link>
                </button>
              </div>
            </div>
            {data && <CardSlider cards={sortedResponses} />}
          </div>
        </div>
        <NewsSectionLatest />

        <div className={styles.newsSectionDiv}>
          <NewsSection name="CRICKET" id="2" slug="cricket" />
          <NewsSection name="WWE" id="4" slug="wwe" />
          <NewsSection name="FOOTBALL" id="3" slug="football" />
        </div>
      </div>
    </>
  );
};

export default page;
