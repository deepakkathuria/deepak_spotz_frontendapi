import React from "react";
import styles from "../styles/PostDisplay.module.css";
import { FaUserTag, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import PostTags from "./PostTags";
import { DateTime } from "luxon";

// function MyComponent(props1) {
//   // const date = props1.date
//   //   ? DateTime.fromISO(props1.date).setZone("Asia/Kolkata")
//   //   : null;
//   const date = props1.date
//     ? DateTime.fromISO(props1.date, { zone: "utc" }).setZone("Asia/Kolkata")
//     : null;

//   console.log("Processed Date:", date);

//   const formattedDateLong = date
//     ? date.toLocaleString(DateTime.DATETIME_MED)
//     : null;
//   const formattedDateShort = date
//     ? date.toLocaleString(DateTime.DATE_SHORT)
//     : null;

//   console.log("Formatted Date:", formattedDateLong);

//   return (
//     <div>
//       <h3>{formattedDateLong}</h3>
//     </div>
//   );
// }

function MyComponent(props1) {
  // console.log("date received from wordpress : ", props1.date);

  // Parse the date, if it exists
  const date = props1.date
    ? DateTime.fromISO(props1.date, { zone: "utc" }).setZone("Asia/Kolkata")
    : null;

  // console.log("Processed Date:", date);

  // Format the date to "Sep 9, 2023 at 5:36 PM" style
  const customFormat = "MMM d, y 'at' h:mm a";
  const formattedDate = date ? date.toFormat(customFormat) : null;

  // console.log("Formatted Date:", formattedDate);

  return (
    <div>
      <h3>{formattedDate}</h3>
    </div>
  );
}

// export default MyComponent;

const PostDisplay = (props) => {
  // console.log("Raw GMT:", props.date);
  // const paragraphs = props.description
  //   .split("<p>")
  //   .filter((para) => para.trim() !== "");

  // for (const ad of props.ad) {
  //   if (ad.para_no <= paragraphs.length) {
  //     paragraphs.splice(ad.para_no, 0, ad.code);
  //   }
  // }

  // const finalHTMLAD = paragraphs.join("");

  // const urlRegex =
  //   /href="https:\/\/admin\.sportzwiki\.com(?!\/wp-content\/uploads)([^"]+)"/g;
  // const finalHTML = finalHTMLAD.replace(
  //   urlRegex,
  //   'href="https://sportzwiki.com$1"'
  // );

  const paragraphs = props.description
    .split("<p>")
    .filter((para) => para.trim() !== "");

  // Insert the given div after the 3rd paragraph
  paragraphs.splice(3, 0, '<div id="div-ub-sportzwiki"></div>');

  for (const ad of props.ad) {
    if (ad.para_no <= paragraphs.length) {
      paragraphs.splice(ad.para_no, 0, ad.code);
    }
  }

  const finalHTMLAD = paragraphs.join("");

  const urlRegex =
    /href="https:\/\/admin\.sportzwiki\.com(?!\/wp-content\/uploads)([^"]+)"/g;

  const finalHTML = finalHTMLAD.replace(
    urlRegex,
    'href="https://sportzwiki.com$1"'
  );

  return (
    <>
      <div className={styles.postDisplayContainer}>
        <div className={styles.postHeading}>
          <h1
            className={styles.postHeadingInner}
            dangerouslySetInnerHTML={{ __html: props?.title }}
          ></h1>
        </div>
        <div className={styles.authorDateDiv}>
          <div className={styles.authorDetail}>
            <div className={styles.authorName}>
              <FaUserTag size={12} />
              <h3>{props?.author}</h3>
            </div>
            <div className={styles.publishDate}>
              <FaRegCalendarAlt size={12} />
              {/* <h3>{new Date(props?.date).toLocaleString("en-us")}</h3> */}
              {/* <h3>
                {DateTime.props?.date
                  .setZone("Asia/Kolkata")
                  .minus({ weeks: 1 })
                  .endOf("day")
                  .toISO()}
              </h3> */}
              <MyComponent date={props?.date} />
              {/* <ConvertToIST
                date={new Date(props?.date).toLocaleString("en-us")}
              /> */}
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
            <div
              className={styles.postDescriptionContent}
              dangerouslySetInnerHTML={{ __html: finalHTML }}
            />
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
