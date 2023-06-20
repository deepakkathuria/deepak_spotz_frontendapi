
import React, { Suspense } from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
import OrganisationLd from "@/json-ld/OrganisationLd";
import LiveScoreSection from "@/components/common/LiveScoreSection";

const page = async () => {
  try {
    const response = await fetch(
      `${base_url}/getcategoriesbyname?category1=cricket&category2=news&category3=football`,
      { next: { revalidate: 5 } }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    var data = await response.json();
    // Use the data here
  } catch (e) {
    console.log(e.message);
  }

  return (
    <>
      <OrganisationLd />
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        {/* <Suspense fallback={"Loading Live Scores..."}> */}
        <div className="scores">
          <LiveScoreSection />
        </div>
        {/* </Suspense> */}

        {/* <div className="newsSection"> */}
          {/* <Suspense fallback={"Loading latest news..."}> */}
            <NewsSectionLatest />
          {/* </Suspense> */}

          <Suspense fallback={"Loading"}>
            <div className={styles.newsSectionDiv}>
              {data?.map((item) => {
                return (
                  <div key={item.ID}>
                    <NewsSection name={item.name} slug={item.slug} />
                  </div>
                );
              })}
            </div>
          </Suspense>
        </div>
      {/* </div> */}
    </>
  );
};

export default page;
