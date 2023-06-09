import React from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import NewsSectionLatest from "../components/common/NewsSectionLatest";
import axios from "axios";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
import { OrganizationJsonLd } from "next-seo";
import ScoreCardPanel from "@/components/common/ScoreCardPanel";
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const page = async () => {
  try {
    const response = await fetch(`${base_url}/getrecentcategorynameslug`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    var categoriesList = await response.json();
    // Use the categoriesList data here
  } catch (err) {
    console.log(err);
  }

  var distinctCategories = Array.from(
    new Set(categoriesList?.map((item) => item.category_slug))
  );

  try {
    const response = await fetch(
      `${base_url}/getcategoriesbyname?category1=${distinctCategories[0]}&category2=${distinctCategories[1]}&category3=${distinctCategories[2]}`,
      { next: { revalidate: 60 } }
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
      <OrganizationJsonLd
        useAppDir={true}
        type="Corporation"
        id={site_url}
        logo="https://www.example.com/photos/logo.jpg"
        legalName="Sportzwiki Media Pvt ltd"
        name="SportzWiki"
        address={{
          streetAddress: "91 Springboard",
          addressLocality: "Haryana",
          addressRegion: "HR",
          postalCode: "95129",
          addressCountry: "IN",
        }}
        contactPoint={[
          {
            telephone: "+91-999-999-9999",
            contactType: "customer service",
            email: "customerservice@email.com",
            areaServed: "US",
            availableLanguage: ["English", "Spanish", "French"],
          },
          {
            telephone: "+1-877-746-0909",
            contactType: "customer service",
            email: "servicecustomer@email.com",
            contactOption: "TollFree",
            availableLanguage: "English",
          },
          {
            telephone: "+1-877-453-1304",
            contactType: "technical support",
            contactOption: "TollFree",
            areaServed: ["US", "CA"],
            availableLanguage: ["English", "French"],
          },
        ]}
        sameAs={["https://www.orange-fox.com"]}
        url="https://www.purpule-fox.io/"
      />
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        {/* <ScoreCardPanel /> */}
        

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

export const revalidate = 60; // revalidate this page every 60 seconds

export default page;
