import React from "react";
import styles from "../styles/PostListBar.module.css";
import NewscardNoBorder from "./NewscardNoBorder";
import axios from "axios";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const PostListBar = async (props) => {
  try {
    var postsList = await axios.get(
      `${base_url}/getpostsbycategoryname?name=${props.category}`
    );
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <div className={styles.postListBarContainer}>
        <div className={styles.postListTitle}>
          <h3>{props.category.toUpperCase()}</h3>
        </div>
        <div className={styles.postList}>
          {postsList.data?.map((item) => {
            return (
              <div key={item.ID}>
                <Link href={`${props.category}/${item.post_name}`}>
                  <NewscardNoBorder
                    title={item.post_title}
                    date={item.post_modified_gmt}
                    content={item.post_content.substring(0, 40)}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostListBar;
