import React from "react";
import styles from "../styles/PostListBar.module.css";
import NewscardNoBorder from "./NewscardNoBorder";
// import axios from "axios";
// import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const getPostByCategoryId = async() => {
  const res = await fetch(
    "https://demo2.sportzwiki.com/wp-json/wp/v2/posts?categories=10&per_page=9"
  );
  return await res.json();
};

const PostListBar = async (props) => {
  // try {
  //   var postsList = await axios.get(
  //     `${base_url}/getpostsbycategoryname?name=${props.category}`
  //   );
  // } catch (err) {
  //   console.log(err);
  // }

  // async function getPostList(category) {
  //   try {
  //     const response = await fetch(
  //       `${base_url}/getpostsbycategoryname?name=${category}`
  //     );
  //     if (response.ok) {
  //       const postsList = await response.json();
  //       return postsList;
  //     } else {
  //       throw new Error("Network response was not ok.");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const postsList = await getPostList(props.category);
  const postsList2 = await getPostByCategoryId(15);
  // console.log(postsList2,'postilistsmgjndkvjdkvnkj')

  // console.log(postsList, "PostList");

  // const thumbnail = await getPostThumbById();

  return (
    <>
      <div className={styles.postListBarContainer}>
        <div className={styles.postListTitle}>
          <h3>{props?.category?.toUpperCase()}</h3>
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
