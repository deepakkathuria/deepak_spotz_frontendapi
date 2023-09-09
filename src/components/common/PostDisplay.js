import React from "react";
import styles from "../styles/PostDisplay.module.css";
import { FaUserTag, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import PostTags from "./PostTags";

const PostDisplay = (props) => {
  // console.log(props.ad,'props.adprops.adprops.ad')
  const paragraphs = props.description
    .split("<p>")
    .filter((para) => para.trim() !== "");

  for (const ad of props.ad) {
    if (ad.para_no <= paragraphs.length) {
      paragraphs.splice(ad.para_no, 0, ad.code);
    }
  }

  const finalHTMLAD = paragraphs.join("");

  const urlRegex =
    /href="https:\/\/admin\.sportzwiki\.com(?!\/wp-content\/uploads)([^"]+)"/g;
  // console.log(finalHTML);
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
              <h3>{new Date(props?.date).toLocaleString("en-us")}</h3>
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
