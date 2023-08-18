// "use client";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
import OrganisationLd from "@/json-ld/OrganisationLd";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import Loading from "./Loading";

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
      <OrganisationLd />
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className="scores">
          <Suspense fallback={<Loading/>}>
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
      </div>
    </>
  );
};

export default page;
// export default dynamic(() => Promise.resolve(page, { ssr: false }));
