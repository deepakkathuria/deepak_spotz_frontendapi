import React from "react";
import Image from "next/image";
import styles from "./NewNewsCardHome.module.css";
// import parse from "html-react-parser";

const NewNewsCardHome = (props) => {
  return (
    <>
      <a href={`/${props.category_slug || "news"}/${props.post_slug}/`}>
        <div className={styles.imageContent}>
          <Image
            className={styles.imageClass}
            src={props?.cover}
            height={"150"}
            width={"225"}
            style={{ borderRadius: "12px" }}
          ></Image>
          <div className={styles.titleTime}>
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: props?.title }}
            >
              {/* IND vs AUS: I Feel Rohit Sharma Is So Excited About The Prospect Of
            Having Jasprit Bumrah – Abhinav Mukund On Indian Speedster’s
          Impressive Return */}
              {/* {parse(props?.title) || "Loading"} */}
            </div>
            <div className={styles.time}>
              {new Date(props?.date).toDateString()}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default NewNewsCardHome;
