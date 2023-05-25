import React from "react";
import styles from "./page.module.css";
import NewsSection from "@/components/common/NewsSection";
import axios from "axios";
import MobSecondaryNav from "@/components/common/MobSecondaryNav";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  try {
    var data = await axios.get(
      `${base_url}/getcategoriesbyname?category1=Kabaddi&category2=News&category3=sports`
    );
  } catch (e) {
    console.log(e.message);
  }

  return (
    <>
      <MobSecondaryNav />
      <div className={styles.homeContainer}>
        <div className={styles.newsSectionDiv}>
          {data.data?.map((item) => {
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
