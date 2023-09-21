import React from "react";
import styles from "../styles/PostDisplay.module.css";
import { FaUserTag, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import PostTags from "./PostTags";
import { DateTime } from "luxon";
import parse from "html-react-parser";

function MyComponent(props1) {
  const date = props1.date
    ? DateTime.fromISO(props1.date, { zone: "utc" }).setZone("Asia/Kolkata")
    : null;

  const customFormat = "MMM d, y 'at' h:mm a";
  const formattedDate = date ? date.toFormat(customFormat) : null;

  return (
    <div>
      <h3>{formattedDate}</h3>
    </div>
  );
}

// export default MyComponent;

const PostDisplay = (props) => {
  // let updatedDescription = props.description.replace(
  //   /https?:\/\/admin\.sportzwiki\.com/g,
  //   "https://sportzwiki.com"
  // );
  // console.log(parse(props?.description));
  return (
    <>
      <div className={styles.postDisplayContainer}>
        <div className={styles.postHeading}>
          {/* <h1
            className={styles.postHeadingInner}
            dangerouslySetInnerHTML={{ __html: props?.title }}
          ></h1> */}
          <h1>{parse(props?.title)}</h1>
        </div>
        <div className={styles.authorDateDiv}>
          <div className={styles.authorDetail}>
            <div className={styles.authorName}>
              <FaUserTag size={12} />
              <h3>{props?.author}</h3>
            </div>
            <div className={styles.publishDate}>
              <FaRegCalendarAlt size={12} />
              <MyComponent date={props?.date} />
            </div>
          </div>
          <div className={styles.postCover}>
            <Image
              src={
                props?.thumbnail
                  ? props?.thumbnail
                  : "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1693483094/swLogo_zvkyfp.jpg"
              }
              width={0}
              height={0}
              sizes="100%"
              alt={props.title || props.title}
              className={styles.coverImage}
              priority
              quality={30}
            />
          </div>
          {/* <div dangerouslySetInnerHTML={{ __html: props?.adAfterImage }} /> */}
          <div className={styles.postDescription}>
            {/* <div
              className={styles.postDescriptionContent}
              dangerouslySetInnerHTML={{ __html: props?.description }}
            /> */}
            <div className={styles.postDescriptionContent}>
              {parse(props?.description)}
            </div>
          </div>

          <PostTags tags={props.tags} />
        </div>
      </div>
      {/* <div id="div-ub-sportzwiki"></div> */}
      {/* <CustomAd3 /> */}
    </>
  );
};

export default PostDisplay;
