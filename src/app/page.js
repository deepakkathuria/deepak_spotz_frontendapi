// "use client";
import React from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
import OrganisationLd from "@/json-ld/OrganisationLd";
import LiveScoreSection from "@/components/common/LiveScoreSection";
import dynamic from "next/dynamic";

const page = async () => {
  // const categories = [
  //   {
  //     id: 1,
  //     name: "Cricket",
  //   },
  //   {
  //     id: 2,
  //     name: "Football",
  //   },
  //   {
  //     id: 3,
  //     name: "WWE",
  //   },
  //   {
  //     id: 4,
  //     name: "Kabaddi",
  //   },
  // ];

  try {
    const response = await fetch(
      `${base_url}/getcategoriesbyname?category1=cricket&category2=news&category3=football`,
      { next: { revalidate: 5 } }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    var data = await response.json();
  } catch (e) {
    console.log(e.message);
  }

  return (
    <>
      <OrganisationLd />
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className="scores">
          <LiveScoreSection />
        </div>
        <NewsSectionLatest />

        <div className={styles.newsSectionDiv}>
          {data?.map((item) => {
            return (
              <div key={item.ID}>
                <NewsSection name={item.name} slug={item.slug} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

// export default page;
export default dynamic(() => Promise.resolve(page, { ssr: false }));
