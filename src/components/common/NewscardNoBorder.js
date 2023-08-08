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
  //   }
  // }

  const thumbnail =
    props?.thumbnail ||
    "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg";

  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.cardImage}>
          <Image
            src={
              typeof thumbnail !== "undefined" && thumbnail.length
                ? thumbnail
                : "https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
            }
            width={150}
            height={100}
            sizes="100vw"
            alt={props?.title}
            style={{
              // width: "13rem",
              // height: "10rem",
              // objectFit: "cover",
              borderRadius: "3px",
            }}
          />
        </div>
        <div className={styles.postDetails}>
          <div className={styles.cardTitle}>
            <p>{props?.title}</p>
          </div>

          {/* <div className={styles.cardDescription}>
            <p>{props?.content?.replace(/(<([^>]+)>)/gi, "")}...</p>
          </div> */}

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
