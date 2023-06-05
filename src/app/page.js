import React from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import axios from "axios";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
import { OrganizationJsonLd } from "next-seo";
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const page = async () => {
  var categoriesList = await axios
    .get(`${base_url}/getrecentcategorynameslug`)
    .catch((err) => console.log(err));

    // sj
  // Extract distinct category names from the response
  var distinctCategories = Array.from(
    new Set(categoriesList.data.map((item) => item.category_name))
  );

  // var distinctCategoriesVariable = distinctCategories;
  // Print the distinct category names
  console.log("@@@@@@@@@@@@@@@@@");
  console.log(distinctCategories);
  // console.log(distinctCategoriesVariable)
  console.log("@@@@@@@@@@@@@@@@@");

  // Store the distinct category names in a variable

  try {
    var data = await axios.get(
      `${base_url}/getcategoriesbyname?category1=cricket&category2=football&category3=wwe`
    );
  } catch (e) {
    console.log(e.message);
  }

  // console.log("##############");
  // console.log(categoriesList.data);
  // console.log("##############");

  return (
    <>
      <OrganizationJsonLd
        useAppDir={true}
        type="Corporation"
        id={site_url}
        logo="https://www.example.com/photos/logo.jpg"
        legalName="Sportzwiki Media Pvt ltd"
        name="Purple Fox"
        address={{
          streetAddress: "1600 Saratoga Ave",
          addressLocality: "San Jose",
          addressRegion: "CA",
          postalCode: "95129",
          addressCountry: "US",
        }}
        contactPoint={[
          {
            telephone: "+1-401-555-1212",
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
        <div className={styles.newsSectionDiv}>
          {data?.data?.map((item) => {
            return (
              <div key={item.slug}>
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
