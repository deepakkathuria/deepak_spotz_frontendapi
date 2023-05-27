"use client";
import React, { useState } from "react";
import styles from "../styles/MobSecondaryNav.module.css";
import Image from "next/image";

const MobSecondaryNav = () => {
  const [moreItems, setMoreItem] = useState(false);

  const handleMoreButton = () => {
    setMoreItem(!moreItems);
  };

  return (
    <>
      <div className={styles.mobSecondaryNavContainer}>
        <ul className={styles.mobSecondaryNavUl}>
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/home_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            HOME
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/cricket_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            CRICKET
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/football_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            FOOTBALL
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/wwe_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            WWE
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            ESPORTS
          </li>
        </ul>
        <div onClick={handleMoreButton} className={styles.moreItems}>
          More
        </div>
      </div>

      <div
        className={
          moreItems
            ? `${styles.moreItemsContainer} ${styles.active}`
            : styles.moreItemsContainer
        }
      >
        <ul>
          <li>Kabbadi</li>
          <li>Wiki</li>
          <li>Basket Ball</li>
          <li>Indian Football</li>
          <li>Mine Culture</li>
          <li>Nascar</li>
          <li>Pop Culture</li>
          <li>College Football</li>
          <li>Hockey</li>
          <li>Athletics</li>
          <li>Badminton</li>
          <li>Gymnastics</li>
          <li>Wrestling</li>
          <li>Swimming</li>
          <li>Shooting</li>
          <li>Boxing</li>
          <li>Archery</li>
          <li>Winter Sports</li>
          <li>Roblox</li>
          <li>Free Picks</li>
          <li>Skateboarding</li>
          <li>kho kho</li>
          <li>lifestyle</li>
          <li>MMO</li>
          <li>NBA</li>
          <li>NFL</li>
          <li>MMA</li>
          <li>Tennis</li>
          <li>Golf</li>
          <li>F1</li>
        </ul>
      </div>
    </>
  );
};

export default MobSecondaryNav;
