"use client";
import React, { useState } from "react";
import styles from "../styles/MobSecondaryNav.module.css";

const MobSecondaryNav = () => {
  const [moreItems, setMoreItem] = useState(false);

  const handleMoreButton = () => {
    setMoreItem(!moreItems);
  };

  return (
    <>
      <div className={styles.mobSecondaryNavContainer}>
        <ul className={styles.mobSecondaryNavUl}>
          <li>HOME</li>
          <li>CRICKET</li>
          <li>FOOTBALL</li>
          <li>WWE</li>
          <li>ESPORTS</li>
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
