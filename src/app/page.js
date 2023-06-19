import React from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
// import axios from "axios";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
import { OrganizationJsonLd } from "next-seo";
import ScoreCardPanel from "@/components/common/ScoreCardPanel";
import OrganisationLd from "@/json-ld/OrganisationLd";
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const page = async () => {
  // try {
  //   const response = await fetch(`${base_url}/getrecentcategorynameslug`, {
  //     next: { revalidate: 5 },
  //   });
  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }
  //   var categoriesList = await response.json();
  //   // Use the categoriesList data here
  // } catch (err) {
  //   console.log(err);
  // }

  // if (categoriesList && Array.isArray(categoriesList)) {
  //   var distinctCategories = Array.from(
  //     new Set(categoriesList.map((item) => item.category_slug))
  //   );
  //   // rest of the code
  // }

  // var distinctCategories = Array.from(
  //   new Set(categoriesList?.map((item) => item.category_slug))
  // );

  try {
    const response = await fetch(
      // `${base_url}/getcategoriesbyname?category1=${distinctCategories[0]}&category2=${distinctCategories[1]}&category3=${distinctCategories[2]}`,
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

  // try {
  //   var latestData = await axios.get(
  //     `${base_url}/getlatestposts?limit=9&page=1`
  //   );
  // } catch (e) {
  //   console.log(e.message);
  // }

  return (
    <>
      <OrganisationLd />
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className="scoresDiv" style={{ marginBottom: "4rem" }}>
          <ScoreCardPanel />
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

export default page;
