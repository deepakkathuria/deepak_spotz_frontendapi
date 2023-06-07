import React from "react";
import styles from "../styles/NewscardNoBorder.module.css";
import Image from "next/image";

const NewscardNoBorder = (props) => {
  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.cardImage}>
          <Image
            src="https://feetfirst.org/wp-content/uploads/2020/08/placeholder-16_9.jpg"
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
            <p>{props.title}</p>
          </div>

          <div className={styles.cardDescription}>
            <p>{props.content.replace(/(<([^>]+)>)/gi, "")}...</p>
          </div>

          <div className={styles.cardDate}>
            {new Date(props.date).toLocaleString()}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewscardNoBorder;
