import React from "react";
import UpdatesSound from "@/components/common/UpdatesSound";
import NavBarSec from "@/components/scorePage/NavBarSec";
import styles from "./news.module.css";
import NewsCard from "@/components/common/NewsCard";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const page = async () => {
  try {
    const response = await fetch(
      `${base_url}/getPostByCategorySlug?slug=cricket&page=1&limit=51`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
    if (response.ok) {
      var data = await response.json();
    } else {
      throw new Error("Request failed with status " + response.status);
    }
  } catch (e) {
    console.log(e.message);
  }

  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div style={{ marginTop: "2rem" }} className="updates">
          <UpdatesSound />
        </div>
        <div className={styles.news}>
          <h1>CRICKET NEWS</h1>
          <div className={styles.newsContainer}>
            {data?.map((item, index) => {
              return (
                <div key={index}>
                  {/* <a href={`${props?.slug}/${item?.post_name}`}> */}
                  <NewsCard
                    title={item?.post_title}
                    date={new Date(item?.post_modified).toLocaleString("en-us")}
                    content={item?.post_content}
                    // slug={item.name}
                    id={item?.ID}
                    guid={item?.guid}
                  />
                  {/* </a> */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
