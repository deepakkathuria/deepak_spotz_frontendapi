import React, { Suspense } from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
import UpdatesSound from "@/components/common/UpdatesSound";
import CardSlider from "@/components/home/CardSlider";
import Link from "next/link";
import Image from "next/image";
import CurrentSeries from "@/components/home/CurrentSeries";
import NewNewsCardHome from "@/components/home/NewNewsCardHome";
import NewNewsCardHomeDynamicSize from "@/components/home/NewNewsCardHomeDynamicSize";
import IccRankingBox from "@/components/home/IccRankingBox";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
const baseWpUrl = process.env.BASE_URL_WP;
const WP_API_USERNAME = process.env.WP_API_USERNAME;
const WP_API_PASSWORD = process.env.WP_API_PASSWORD;

const credentials = `${WP_API_USERNAME}:${WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

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

const getLatestPosts = async () => {
  try {
    const apiUrl = `${baseWpUrl}/wp-json/wp/v2/posts?per_page=5`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 10 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch latest posts");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching latest posts:", error.message);
    return [];
  }
};

const getCategoryNewsByID = async (id) => {
  try {
    const apiUrl = `${baseWpUrl}/wp-json/wp/v2/posts?per_page=5&categories=${id}`;

    const response = await fetch(apiUrl, {
      next: { revalidate: 60 },
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch latest posts");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching latest posts:", error.message);
    return [];
  }
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

  const latestPosts = await getLatestPosts();

  const categoryIds = [2, 4, 3, 184892]; // cricket, wwe, football (world cup 2023 184892)

  const categoryNewsPromises = categoryIds.map((id) => getCategoryNewsByID(id));

  const [categoryNewsA, categoryNewsB, categoryNewsC, tempCategory] =
    await Promise.all(categoryNewsPromises);

  console.log(tempCategory, "latestPostslatestPosts");

  return (
    <>
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className={styles.CurrentSeriesContainer}>
          <CurrentSeries />
        </div>
        <div className="scores">
          <UpdatesSound />
          {/* <div className={styles.quickLinks}>
            <div className={styles.quickLinksHeading}>
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
          </div> */}
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
        {/* <NewsSectionLatest /> */}

        {/* <div className={styles.newsSectionDiv}>
          <NewsSection name="CRICKET" id="2" slug="cricket" />
          <NewsSection name="WWE" id="4" slug="wwe" />
          <NewsSection name="FOOTBALL" id="3" slug="football" />
        </div> */}
        <div className={styles.boxMainContainer}>
          <div>
            <div className={styles.cat1Box}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className={styles.topTeamDiv}>Top Teams</span>
                <a
                  style={{
                    fontSize: "1.2rem",
                    color: "#003161",
                    fontWeight: "bold",
                  }}
                  href="/cricket-team/"
                >
                  View Full
                </a>
              </div>
              <hr className={styles.topTeamDivHr} />
              <ul className={styles.topTeamList}>
                <li className={styles.topTeam1}>
                  <a href="/cricket-team/india-25/schedule/">India</a>
                </li>
                <li className={styles.topTeam2}>
                  <a href="/cricket-team/australia-5/schedule/">Australia</a>
                </li>
                <li className={styles.topTeam3}>
                  <a href="/cricket-team/pakistan-13/schedule/">Pakistan</a>
                </li>
                <li className={styles.topTeam4}>
                  <a href="/cricket-team/south-africa-19/schedule/">
                    South Africa
                  </a>
                </li>
                <li className={styles.topTeam5}>
                  <a href="/cricket-team/england-490/schedule/">England</a>
                </li>
                <li className={styles.topTeam6}>
                  <a href="/cricket-team/new-zealand-7/schedule/">
                    New Zealand
                  </a>
                </li>
                <li className={styles.topTeam7}>
                  <a href="/cricket-team/bangladesh-23/schedule/">Bangladesh</a>
                </li>
                <li className={styles.topTeam8}>
                  <a href="/cricket-team/sri-lanka-21/schedule/">Sri Lanka</a>
                </li>
                <li className={styles.topTeam9}>
                  <a href="/cricket-team/afghanistan-498/schedule/">
                    Afganistan
                  </a>
                </li>
                <li className={styles.topTeam10}>
                  <a href="/cricket-team/west-indies-17/schedule/">
                    West Indies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
              maxWidth: "57.8rem",
            }}
          >
            <Suspense fallback={"Loading data"}>
              <div className={`${styles.cat2Box} ${styles.cat2BoxMob}`}>
                <span className={styles.mainSeries}>World Cup 2023</span>
                <ul className={styles.mainSeriesUl}>
                  <li>
                    <a href="/cricket-series/icc-mens-world-cup-warm-up-matches-127865/matches">
                      Schedule
                    </a>
                  </li>
                  <li>
                    <a href="/cricket-series/icc-mens-world-cup-warm-up-matches-127865/matches">
                      Results
                    </a>
                  </li>
                  <li>
                    <a href="/cricket/">News</a>
                  </li>
                </ul>
              </div>
              {/* {latestPosts?.length > 0 && (
                <div className={styles.cat2Box}>
                  <NewNewsCardHome
                    title={latestPosts[0].title.rendered || "no title"}
                    cover={latestPosts[0].featured_image_url}
                  />
                </div>
              )}
              <div className={styles.newsCardsGroup}>
                {latestPosts?.slice(1).map((item, index) => (
                  <NewNewsCardHomeDynamicSize
                    key={index}
                    title={item.title.rendered || "no title"}
                    cover={item.featured_image_url}
                  />
                ))}
              </div> */}
            </Suspense>
            <Suspense fallback={"Loading data"}>
              <div style={{ marginTop: "2rem" }} className={styles.cat2Box1}>
                <span
                  style={{ marginLeft: "2rem" }}
                  className={styles.mainSeries}
                >
                  Latest
                </span>
              </div>
              {latestPosts?.length > 0 && (
                <div className={styles.cat2Box}>
                  <NewNewsCardHome
                    title={latestPosts[0].title.rendered || "no title"}
                    cover={latestPosts[0]?.featured_image_url}
                    category_slug={latestPosts[0].primary_category_slug}
                    post_slug={latestPosts[0].slug}
                    date={latestPosts[0].modified}
                  />
                </div>
              )}
              <div className={styles.newsCardsGroup}>
                {latestPosts?.slice(1).map((item, index) => (
                  <NewNewsCardHomeDynamicSize
                    key={index}
                    title={item.title.rendered || "no title"}
                    cover={item?.featured_image_url}
                    category_slug={item.primary_category_slug}
                    post_slug={item.slug}
                  />
                ))}
              </div>
            </Suspense>
            <Suspense fallback={"Loading data"}>
              <div style={{ marginTop: "2rem" }} className={styles.cat2Box1}>
                <span
                  style={{ marginLeft: "2rem" }}
                  className={styles.mainSeries}
                >
                  Cricket
                </span>
              </div>
              {categoryNewsA?.length > 0 && (
                <div className={styles.cat2Box}>
                  <NewNewsCardHome
                    title={categoryNewsA[0]?.title?.rendered || "no title"}
                    cover={categoryNewsA[0]?.featured_image_url}
                    category_slug={categoryNewsA[0]?.primary_category_slug}
                    post_slug={categoryNewsA[0]?.slug}
                    date={latestPosts[0]?.modified}
                  />
                </div>
              )}
              <div className={`${styles.newsCardsGroup} ${styles.newsDiv}`}>
                {categoryNewsA?.slice(1).map((item, index) => (
                  <NewNewsCardHomeDynamicSize
                    key={index}
                    title={item?.title?.rendered || "no title"}
                    cover={item?.featured_image_url}
                    category_slug={item?.primary_category_slug}
                    post_slug={item?.slug}
                  />
                ))}
              </div>
            </Suspense>
            <Suspense fallback={"Loading data"}>
              <div style={{ marginTop: "2rem" }} className={styles.cat2Box1}>
                <span
                  style={{ marginLeft: "2rem" }}
                  className={styles.mainSeries}
                >
                  WWE
                </span>
              </div>
              {categoryNewsB?.length > 0 && (
                <div className={styles.cat2Box}>
                  <NewNewsCardHome
                    title={categoryNewsB[0].title.rendered || "no title"}
                    cover={categoryNewsB[0]?.featured_image_url}
                    category_slug={categoryNewsB[0]?.primary_category_slug}
                    post_slug={categoryNewsB[0]?.slug}
                    date={latestPosts[0]?.modified}
                  />
                </div>
              )}
              <div className={`${styles.newsCardsGroup} ${styles.newsDiv}`}>
                {categoryNewsB?.slice(1).map((item, index) => (
                  <NewNewsCardHomeDynamicSize
                    key={index}
                    title={item.title.rendered || "no title"}
                    cover={item?.featured_image_url}
                    category_slug={item?.primary_category_slug}
                    post_slug={item?.slug}
                  />
                ))}
              </div>
            </Suspense>
            <Suspense fallback={"Loading data"}>
              <div style={{ marginTop: "2rem" }} className={styles.cat2Box1}>
                <span
                  style={{ marginLeft: "2rem" }}
                  className={styles.mainSeries}
                >
                  Football
                </span>
              </div>
              {/* <div className={styles.cat2Box}>
                <NewNewsCardHome />
              </div> */}
              {categoryNewsC?.length > 0 && (
                <div className={styles.cat2Box}>
                  <NewNewsCardHome
                    title={categoryNewsC[0].title.rendered || "no title"}
                    cover={categoryNewsC[0]?.featured_image_url}
                    category_slug={categoryNewsC[0]?.primary_category_slug}
                    post_slug={categoryNewsC[0]?.slug}
                    date={latestPosts[0]?.modified}
                  />
                </div>
              )}
              <div className={`${styles.newsCardsGroup} ${styles.newsDiv}`}>
                {categoryNewsC?.slice(1).map((item, index) => (
                  <NewNewsCardHomeDynamicSize
                    key={index}
                    title={item.title.rendered || "no title"}
                    cover={item?.featured_image_url}
                    category_slug={item?.primary_category_slug}
                    post_slug={item?.slug}
                  />
                ))}
              </div>
            </Suspense>
          </div>
          <div className={styles.cat3Box}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span className={styles.topTeamDiv}>ICC Ranking</span>
              {/* <a
                style={{
                  fontSize: "1.2rem",
                  color: "#003161",
                  fontWeight: "bold",
                }}
                href="/cricket-team/"
              >
                View Full
              </a> */}
            </div>
            <hr className={styles.topTeamDivHr} />
            <IccRankingBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
