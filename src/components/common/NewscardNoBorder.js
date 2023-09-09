import React from "react";
import styles from "../styles/NewscardNoBorder.module.css";
import Image from "next/image";
import { getPostThumbById } from "@/lib/PostDataFetch";
import { DateTime } from "luxon";

function MyComponent(props) {
  const date = props.date
    ? DateTime.fromISO(props.date).setZone("Asia/Kolkata")
    : null;

  const formattedDateLong = date
    ? date.toLocaleString(DateTime.DATETIME_MED)
    : null;
  const formattedDateShort = date
    ? date.toLocaleString(DateTime.DATE_SHORT)
    : null;

  return <p className={styles.newsDate}>{formattedDateLong}</p>;
}

const NewscardNoBorder = async (props) => {
  const thumbnail =
    props?.thumbnail ||
    "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1693483094/swLogo_zvkyfp.jpg";

  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.cardImage}>
          <Image
            src={
              typeof thumbnail !== "undefined" && thumbnail.length
                ? thumbnail
                : "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1693483094/swLogo_zvkyfp.jpg"
            }
            width={150}
            height={100}
            sizes="100vw"
            alt={props?.title}
            style={{
              borderRadius: "3px",
            }}
            quality={30}
          />
        </div>
        <div className={styles.postDetails}>
          <div
            className={styles.cardTitle}
            dangerouslySetInnerHTML={{ __html: props?.title }}
          >
            {/* <p>{props?.title}</p> */}
          </div>

          <div className={styles.cardDate}>
            {/* {props.date ? new Date(props.date).toLocaleString("en-us") : ""} */}
            <MyComponent date={props?.date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewscardNoBorder;
