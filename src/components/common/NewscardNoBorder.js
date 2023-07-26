import React from "react";
import styles from "../styles/NewscardNoBorder.module.css";
import Image from "next/image";
import { getPostThumbById } from "@/lib/PostDataFetch";

const NewscardNoBorder = async (props) => {
  // if (props && props.id) {
  //   const oldPostThumbnail = props ? await getPostThumbById(props.id) : "";
  //   // rest of the code here
  //   if (oldPostThumbnail && oldPostThumbnail[0]) {
  //     var thumbnail = oldPostThumbnail;
  //   } else {
  //     var thumbnail = props?.guid;
  //   }
  // }

  // if (props?.id <= 323919) {
  //   // var thumbnail = (await getPostThumbById(post?.[0]?.ID)) ?? "";
  //   var thumbnail = props ? await getPostThumbById(props?.id) : "";
  //   console.log("old", props?.id);
  // }
  // if (props?.id >= 323920) {
  //   // const newPostThumbnail = (await getPostThumbnailById(post
  //   var thumbnail = props?.guid;
  // } else {
  //   thumbnail =
  //     "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg";
  // }

  // if (props?.id <= 323919) {
  //   var thumbnail = props ? await getPostThumbById(props?.id) : "";
  //   console.log("old", props?.id);
  // } else if (props?.id >= 323920) {
  //   var thumbnail = props?.guid;
  // } else {
  //   var thumbnail =
  //     "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg";
  // }

  // console.log(props.guid, "guid");
  // console.log(props.id, "iddd");

  if (props && props.id) {
    const oldPostThumbnail = props ? await getPostThumbById(props.id) : "";
    // rest of the code here
    if (oldPostThumbnail && oldPostThumbnail[0]) {
      var thumbnail = oldPostThumbnail;
    }
  }

  thumbnail =
    props?.thumbnail ||
    "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg";

  // console.log("thumbUrl:", typeof thumbnail, "thumbUrl:", thumbnail);

  // console.log(
  //   " thumbUrl: ",
  //   thumbnail,
  //   " thumbType: ",
  //   typeof thumbnail,
  //   " thumbUrl: ",
  //   thumbnail
  // );

  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.cardImage}>
          <Image
            // src="https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            // src={
            //   thumbnail && thumbnail.length
            //     ? thumbnail
            //     : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            // }
            src={
              typeof thumbnail !== "undefined" && thumbnail.length
                ? thumbnail
                : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            }
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "10rem",
              height: "10rem",
              objectFit: "cover",
              borderRadius: "3px",
            }} // optional
          />
        </div>
        <div className={styles.postDetails}>
          <div className={styles.cardTitle}>
            <p>{props?.title}</p>
          </div>

          <div className={styles.cardDescription}>
            <p>{props?.content?.replace(/(<([^>]+)>)/gi, "")}...</p>
          </div>

          <div className={styles.cardDate}>
            {/* {new Date(props?.date).toLocaleString()} */}
            {/* {props.date ? new Date(props?.date).toLocaleString() : ""} */}
            {props.date ? new Date(props.date).toLocaleString("en-us") : ""}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewscardNoBorder;
