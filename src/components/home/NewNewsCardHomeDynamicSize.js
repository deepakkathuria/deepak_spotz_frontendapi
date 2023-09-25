import React from "react";
import styles from "./NewNewsCardHomeDynamicSize.module.css";
import Image from "next/image";

const NewNewsCardHomeDynamicSize = (props) => {
  return (
    <>
      <a href={`/${props?.category_slug || "news"}/${props?.post_slug}`}>
        <div className={styles.newsContainer}>
          <Image
            className={styles.newsContainerImage}
            src={props?.cover}
            height={150}
            width={265}
            style={{
              borderRadius: "12px 12px 0 0",
            }}
          ></Image>
          <div
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: props?.title }}
          >
            {/* IND vs AUS: I Feel Rohit Sharma Is So Excited About The Prospect Of
          Having Jasprit Bumrah – Abhinav Mukund On Indian Speedster’s
        Impressive Return */}
          </div>
        </div>
      </a>
    </>
  );
};

export default NewNewsCardHomeDynamicSize;
