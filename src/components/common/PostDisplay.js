import React from "react";
import styles from "../styles/PostDisplay.module.css";
import { FaUserTag, FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import PostTags from "./PostTags";
import TweetClientSideRender from "./TweetClientSideRender";
import parse from "html-react-parser";

const PostDisplay = (props) => {

  const tweetRegex = /https:\/\/twitter\.com\/\w+\/status\/(\d+)\?s=20/g;
  const tweetLinks = props.description?.match(tweetRegex);
  const tweetIDs = tweetLinks
    ? tweetLinks.map((tweetLink) => {
        const match = tweetRegex.exec(tweetLink);
        return match ? match[1] : null;
      })
    : [];
  const sections = props.description?.split(tweetRegex);

  const updatedDescription = props.description
    ? tweetLinks
      ? props.description.replace(tweetRegex, "")
      : props.description
    : "";

  return (
    <>
      <div className={styles.postDisplayContainer}>
        <div className={styles.postHeading}>
          <h1>{props.title}</h1>
        </div>
        <div className={styles.authorDateDiv}>
          <div className={styles.authorDetail}>
            <div className={styles.authorName}>
              <FaUserTag size={12} />
              <h3>{props.author}</h3>
            </div>
            <div className={styles.publishDate}>
              <FaRegCalendarAlt size={12} />
              <h3>{new Date(props.date).toLocaleString()}</h3>
            </div>
          </div>
          <div className={styles.postSummary}>
            <p>Description of new article will be put here #GAURAV TANWAR</p>
          </div>

          <div className={styles.postCover}>
            <Image
              src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1005&q=80"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
              alt="Picture of the author"
            />
          </div>

          {/* <div className={styles.postDescription}>
            {sections?.map((section, index) => (
              <div key={index}>
                {parse(section)}
                {index < tweetIDs.length && (
                  <TweetClientSideRender tweetId={tweetIDs[index]} />
                )}
              </div>
            ))}
          </div> */}

          <div className={styles.postDescription}>
            {sections?.map((section, index) => (
              <div key={index}>
                {parse(section)}
                {index < tweetIDs.length && (
                  <TweetClientSideRender tweetId={tweetIDs[index]} />
                )}
              </div>
            ))}
          </div>

          <PostTags tags={props.tags} />
        </div>
      </div>
    </>
  );
};

export default PostDisplay;
