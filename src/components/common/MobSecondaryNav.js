"use client";
import React, { useState } from "react";
import styles from "../styles/MobSecondaryNav.module.css";
import Image from "next/image";
import Link from "next/link";

const MobSecondaryNav = () => {
  const [moreItems, setMoreItem] = useState(false);

  const handleMoreButton = () => {
    setMoreItem(!moreItems);
  };

  return (
    <>
      <div className={styles.mobSecondaryNavContainer}>
        <ul className={styles.mobSecondaryNavUl}>
          <li className={styles.activeLi}>
            <div className={styles.icon}>
              <Image
                src="/gaurav/home_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                quality={20}
                // className={styles.plainIc}
              />
            </div>
            <p>HOME</p>
          </li>
          <Link href={"/sports/cricket"}>
            <li>
              <div className={styles.icon}>
                <Image
                  src="/gaurav/cricket_ic.svg"
                  alt="home menu icon"
                  width={12}
                  height={12}
                  quality={20}
                  // className={styles.plainIc}
                />
              </div>
              <p>CRICKET</p>
            </li>
          </Link>
          <Link href={"/football"}>
            <li>
              <div className={styles.icon}>
                <Image
                  src="/gaurav/football_ic.svg"
                  alt="home menu icon"
                  width={12}
                  height={12}
                  quality={20}
                  // className={styles.plainIc}
                />
              </div>
              <p>FOOTBALL</p>
            </li>
          </Link>
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/wwe_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                quality={20}
                // className={styles.plainIc}
              />
            </div>
            <p>WWE</p>
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                quality={20}
                // className={styles.plainIc}
              />
            </div>
            <p>ESPORTS</p>
          </li>
        </ul>
        <div onClick={handleMoreButton} className={styles.moreItems}>
          More
          <div className={styles.icon}>
            <Image
              src="/gaurav/down_arrow_ic.svg"
              alt="home menu icon"
              width={12}
              height={12}
              quality={20}
              // className={styles.plainIc}
            />
          </div>
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
          <li>
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                quality={20}
                // className={styles.plainIc}
              />
            </div>
            Kabbadi
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                quality={20}
                // className={styles.plainIc}
              />
            </div>
            Wiki
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                quality={20}
                // className={styles.plainIc}
              />
            </div>
            Basket Ball
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                
                // className={styles.plainIc}
              />
            </div>
            Indian Football
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Mine Culture
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Nascar
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Pop Culture
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            College Football
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Hockey
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Athletics
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Badminton
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Gymnastics
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Wrestling
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Swimming
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Shooting
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Boxing
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Archery
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Winter Sports
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Roblox
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Free Picks
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Skateboarding
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            kho kho
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            lifestyle
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            MMO
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            NBA
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            NFL
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            MMA
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Tennis
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            Golf
          </li>
          <li>
            {" "}
            <div className={styles.icon}>
              <Image
                src="/gaurav/gamepad_ic.svg"
                alt="home menu icon"
                width={12}
                height={12}
                // className={styles.plainIc}
              />
            </div>
            F1
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobSecondaryNav;
