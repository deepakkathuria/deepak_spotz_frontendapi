// "use client";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import Loading from "./loading";
import FaqLive from "@/components/common/FaqLive";
import HeaderBox2 from "@/components/common/HeaderBox2";

export async function generateMetadata() {
  // const { slug } = params;
  const siteURL = "https://sportzwiki.com";

  return {
    title: `Sportzwiki`,
    description: `Latest Sports News: Get all latest sports news today on different sports, from Cricket, Football, Tennis, WWE, Esports, Badminton, Basketball, Boxing, F1, Hockey, Kabaddi &amp; Golf.`,
    alternates: {
      canonical: `${siteURL}`,
    },
  };
}

const page = async () => {
  // try {
  //   const response = await fetch(
  //     `${base_url}/getcategoriesbyname?category1=cricket&category2=news&category3=football`,
  //     // `https://demo.sportzwiki.com/api/v1/getcategoriesbyname?category1=cricket&category2=news&category3=football`,
  //     { next: { revalidate: 5 } }
  //   );
  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }
  //   var data = await response.json();
  // } catch (e) {
  //   console.log(e.message);
  // }

  return (
    <>
      {/* <OrganisationLd /> */}
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className="scores">
          <Suspense fallback={<Loading />}>
            {/* <Suspense fallback='Loading...'> */}
            <LiveScoreSection />
          </Suspense>
        </div>
        <NewsSectionLatest />

        <div className={styles.newsSectionDiv}>
          <Suspense fallback="Loading....">
            <NewsSection name="CRICKET" id="2" slug="cricket" />
          </Suspense>
          <Suspense fallback="Loading....">
            <NewsSection name="WWE" id="4" slug="wwe" />
          </Suspense>
          <Suspense fallback="Loading....">
            <NewsSection name="FOOTBALL" id="3" slug="football" />
          </Suspense>
          <Suspense fallback="Loading....">
            <NewsSection
              name="FANTASY CRICKET TIPS"
              id="150559"
              slug="fantasy-cricket"
            />
          </Suspense>
          {/* {data?.map((item) => {
            return (
              <div key={item.ID}>
                <NewsSection name={item.name} slug={item.slug} />
              </div>
            );
          })} */}
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
// export default dynamic(() => Promise.resolve(page, { ssr: false }));
