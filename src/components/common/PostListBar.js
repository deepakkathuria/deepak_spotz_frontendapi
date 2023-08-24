import React from "react";
import styles from "../styles/PostListBar.module.css";
import NewscardNoBorder from "./NewscardNoBorder";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const NEXT_PUBLIC_BASE_URL_WP = process.env.NEXT_PUBLIC_BASE_URL_WP;
const NEXT_PUBLIC_WP_API_USERNAME = process.env.NEXT_PUBLIC_WP_API_USERNAME;
const NEXT_PUBLIC_WP_API_PASSWORD = process.env.NEXT_PUBLIC_WP_API_PASSWORD;

const credentials = `${NEXT_PUBLIC_WP_API_USERNAME}:${NEXT_PUBLIC_WP_API_PASSWORD}`;
const buffer = Buffer.from(credentials, "utf-8");
const base64Credentials = buffer.toString("base64");

const getPostByCategoryId = async (id) => {
  const res = await fetch(
    `${NEXT_PUBLIC_BASE_URL_WP}wp-json/wp/v2/posts?categories=2&per_page=9`,
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    },
    { cache: "no-store" }
  );
  return await res.json();
};

const PostListBar = async (props) => {
  const postsList2 = await getPostByCategoryId(83366);

  return (
    <>
      <div className={styles.postListBarContainer}>
        <div className={styles.postListTitle}>
          {/* <h3>{props?.category?.toUpperCase()}</h3> */}
          <h3>NEWS</h3>
        </div>
        <div className={styles.postList}>
          {postsList2 &&
            postsList2?.map((item, index) => {
              return (
                <div key={index}>
                  <a href={`/${props.category}/${item?.slug}`}>
                    <NewscardNoBorder
                      title={item?.title.rendered}
                      date={item?.date}
                      content={item?.content.rendered?.substring(0, 40)}
                      id={item?.id}
                      guid={item?.id}
                      thumbnail={item?.featured_image_url}
                    />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default PostListBar;
