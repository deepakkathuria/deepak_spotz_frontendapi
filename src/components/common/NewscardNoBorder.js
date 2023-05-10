import React from "react";
import styles from "../styles/NewscardNoBorder.module.css";
import Image from "next/image";

const NewscardNoBorder = () => {
  return (
    <>
      <div className={styles.newsCardContainer}>
        <div className={styles.cardImage}>
          <Image
            src="https://images.unsplash.com/photo-1587280501635-a19de238a81e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "10rem", height: "10rem", objectFit: "cover" }} // optional
          />
        </div>
        <div className={styles.postDetails}>
          <div className={styles.cardTitle}>
            <p>GT vs RR: “It’s Unbelievable How He Does Such Things” </p>
          </div>

          <div className={styles.cardDescription}>
            <p>
              During the match between New Zealand and Ireland. New Zealand now
              holds...
            </p>
          </div>

          <div className={styles.cardDate}>April 17, 2023</div>
        </div>
      </div>
    </>
  );
};

export default NewscardNoBorder;
