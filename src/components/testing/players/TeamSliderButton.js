import React from "react";
import styles from "./TeamSliderButton.module.css";
import Image from "next/image";
// import Link from "next/link";

const TeamSliderButton = (props) => {
  return (
    <>
      <div className={styles.container}>
        <a href={`/cricketers/${props?.src}/`}>
          <div className="img">
            <Image src={props?.img} height={20} width={20} alt="" />
          </div>
          <div className={styles.name}>{props?.name}</div>
        </a>
      </div>
    </>
  );
};

export default TeamSliderButton;
