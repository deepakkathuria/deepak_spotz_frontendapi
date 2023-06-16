import React from "react";
import styles from "../styles/NewsCard.module.css";
import Image from "next/image";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;

const NewsCard = async (props) => {
  const getPostThumbById = async () => {
    try {
      const response = await fetch(
        `${base_url}/getPostThumbnailByPostID?id=${props.id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch post data");
      }
      const postThumb = await response.json();
      return postThumb[0]?.cover_image_guid; // Add null check using the optional chaining operator (?.)
    } catch (err) {
      console.log(err);
      return null; // or any other value indicating the error condition
    }
  };

  const oldPostThumbnail = await getPostThumbById();

  if (oldPostThumbnail && oldPostThumbnail[0]) {
    var thumbnail = oldPostThumbnail;
    // console.log(thumbnail, "Thumbnail");
  } else {
    var thumbnail = props.guid;
    // console.log("Thumbnail guid");
  }

  console.log(thumbnail, "Thumbnail");
  console.log("Here")

  // if (oldPostThumbnail && oldPostThumbnail[0]) {
  //   var thumbnail = oldPostThumbnail;
  // } else {
  //   var thumbnail = postBody[0]?.guid;
  // }

  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.newsCover}>
          <Image
            src={
              thumbnail
                ? thumbnail
                : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            }
            width={0}
            height={0}
            alt="SportzWiki Logo"
            sizes="100vh"
            style={{ width: "10.5rem", height: "10rem", borderRadius: "3px" }}
          />
        </div>
        <div className={styles.newsDetails}>
          <p className={styles.newsTitle}>{props.title}</p>
          <p className={styles.newsDescription}>
            {props.content?.substring(0, 45).replace(/(<([^>]+)>)/gi, "")}...
          </p>
          <p className={styles.newsDate}>{props.date}</p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
