import React from "react";
import styles from "../styles/PostListBar.module.css";
import NewscardNoBorder from "./NewscardNoBorder";
// import axios from "axios";
// import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const PostListBar = async (props) => {
  // try {
  //   var postsList = await axios.get(
  //     `${base_url}/getpostsbycategoryname?name=${props.category}`
  //   );
  // } catch (err) {
  //   console.log(err);
  // }

  async function getPostList(category) {
    try {
      const response = await fetch(
        `${base_url}/getpostsbycategoryname?name=${category}`
      );
      if (response.ok) {
        const postsList = await response.json();
        return postsList;
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const postsList = await getPostList(props.category);

  console.log(postsList, "PostList");

  // const thumbnail = await getPostThumbById();

  return (
    <>
      <div className={styles.postListBarContainer}>
        <div className={styles.postListTitle}>
          <h3>{props?.category?.toUpperCase()}</h3>
        </div>
        <div className={styles.postList}>
          {postsList &&
            postsList?.map((item, index) => {
              return (
                <div key={index}>
                  <a href={`/${props.category}/${item.post_name}`}>
                    <NewscardNoBorder
                      title={item?.post_title}
                      date={item?.post_modified_gmt}
                      content={item?.post_content?.substring(0, 40)}
                      id={item?.ID}
                      guid={item?.guid}
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
