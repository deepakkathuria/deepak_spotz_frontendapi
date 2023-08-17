import React from "react";
import styles from "../styles/venueCard.module.css";
import Image from "next/image";

const VenueCard = () => {
  return (
    <>
      <div className={styles.outerDiv}>
        <div className="img">
          <Image src={"/gaurav/stadium.svg"} height={54} width={54} alt="" />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>Arun jaitly stadium</div>
          <div className={styles.location}>Delhi</div>
        </div>
      </div>
    </>
  );
};

export default VenueCard;
