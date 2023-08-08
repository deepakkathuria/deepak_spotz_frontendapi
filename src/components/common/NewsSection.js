import React from "react";
import styles from "../styles/NewsSection.module.css";
// import { GiCricketBat } from "react-icons/gi";
import ButtonTab from "./ButtonTab";
import NewsCard from "./NewsCard";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const fetchPostByCategoryId = async (id, perPage) => {
  const res = await fetch(
    `https://demo2.sportzwiki.com/wp-json/wp/v2/posts?categories=${id}&per_page=${perPage}`,
    // { next: { revalidate: 10 } }
    { cache: "no-store" }
  );
  return await res.json();
};

const NewsSection = async (props) => {
  // try {
  //   var data = await axios.get(
  //     `${base_url}/getPostByCategorySlug?slug=${props.slug}&page=1&limit=9`,
  //     { next: { revalidate: 5 } }
  //   );
  // } catch (e) {
  //   console.log(e.message);
  // }
  // console.log(props.id, "propeeeidjhvbdkjhvdbfjh");
  const data = await fetchPostByCategoryId(props.id, 9);
  // console.log(data, "data2");

  return (
    <>
      <div className={styles.newsSectionContainer}>
        <div className={styles.newsSectionHeading}>
          <h3>{props?.name}</h3>
          {/* <GiCricketBat color="#000" /> */}
        </div>
        {/* <div className={styles.newsSectionTabs}>
          <ButtonTab title="Latest News" />
          <ButtonTab title="Fantasy Tips" selected="true" />
        </div> */}
        <div className={styles.newsCardsDiv}>
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <a href={`/${props?.slug?.toLowerCase()}/${item?.slug}`}>
                  <NewsCard
                    title={item?.title?.rendered}
                    date={item?.date_gmt ? item.date_gmt : ""}
                    content={item?.content?.rendered}
                    id={item?.id}
                    featuredMedia={item?.featured_image_url}
                    slug={item?.slug}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className={styles.readMoreLabel}>
          <a href={`/${props?.slug}`}>Read More</a>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
