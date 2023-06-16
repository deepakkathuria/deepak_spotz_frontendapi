"use client";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { navBarLinks } from "@/utils/navLinks";
import Link from "next/link";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div className={styles.navbarDiv}>
        <div className={styles.navContainer}>
          <div className={styles.NavLogo}>
            <a href={"/"}>
              <Image
                src="/gaurav/sportzwiki_logo.svg"
                width={130}
                height={30}
                alt="SportzWiki Logo"
              />
            </a>
          </div>
          <div className={styles.NavbarOption}>
            <ul>
              <a href={"/"}>
                <li className={styles.navLi}>
                  <div className={styles.navItemIcon}>
                    <Image
                      src="/gaurav/home_ic.svg"
                      alt="home menu icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="navItemName">Home</div>
                </li>
              </a>

              <a href={"/cricket"}>
                <li className={styles.navLi}>
                  <div className={styles.navItemIcon}>
                    <Image
                      src="/gaurav/cricket_ic.svg"
                      alt="cricket bat icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className="navItemName">Cricket</div>
                </li>
              </a>

              <a href={"/football"}>
                <li className={styles.navLi}>
                  <div className={styles.navItemIcon}>
                    <Image
                      src="/gaurav/football_ic.svg"
                      alt="home menu icon"
                      width={16}
                      height={16}
                      className={styles.plainIc}
                    />
                  </div>
                  <div className="navItemName">Football</div>
                </li>
              </a>

              <a href={"/wwe"}>
                <li className={styles.navLi}>
                  <div className={styles.navItemIcon}>
                    <Image
                      src="/gaurav/wwe_ic.svg"
                      alt="home menu icon"
                      width={16}
                      height={16}
                      className={styles.plainIc}
                    />
                  </div>
                  <div className="navItemName">WWE</div>
                </li>
              </a>

              <a href={"e-sports"}>
                <li className={styles.navLi}>
                  <div className={styles.navItemIcon}>
                    <Image
                      src="/gaurav/gamepad_ic.svg"
                      alt="home menu icon"
                      width={16}
                      height={16}
                      className={styles.plainIc}
                    />
                  </div>
                  <div className="navItemName">Esports</div>
                </li>
              </a>

              <a href={"#"}>
                <li className={`${styles.navLi} ${styles.moreItem}`}>
                  <div className="navItemName">More</div>
                  <div className={styles.navItemIcon}>
                    <Image
                      src="/gaurav/down_arrow_ic.svg"
                      alt="more icon"
                      width={12}
                      height={12}
                      className={styles.plainIc}
                    />
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div className={styles.navOptions}>
            <a href={"#"}>
              <div className="navSearch">
                <Image
                  src="/gaurav/search_ic.svg"
                  alt="search icon"
                  width={22}
                  height={22}
                  // className={styles.plainIc}
                />
              </div>
            </a>
            <a href={"#"}>
              <div className={styles.navLogin}>
                {/* <CgProfile color="#fff" size={"20"} /> */}
                <Image
                  src="/gaurav/profile_ic.svg"
                  alt="profile menu icon"
                  width={20}
                  height={20}
                  // className={styles.plainIc}
                />
                <div className={styles.navLoginText}>Login/SignUp</div>
              </div>
            </a>
            <a href={"#"}>
              <div className="navHamburger">
                {/* <CgMenuMotion color="#fff" size={20} /> */}
              </div>
            </a>
            <div className={styles.navOptionsMobile}>
              <div className="hamburger-ic">
                <Image
                  src="/gaurav/Menu_ic.svg"
                  alt="hamburger menu icon"
                  width={25}
                  height={25}
                  // 20 /20 size
                  // className={styles.plainIc}
                  style={{
                    color: "#98CCFF",
                    fill: "#98CCFF",
                    stroke: "#98CCFF",
                  }}
                  onClick={showSidebar}
                  // priority
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            sidebar
              ? `${styles.sideBarMobile} ${styles.active}`
              : styles.sideBarMobile
          }
        >
          <ul className={styles.navMenuList}>
            {navBarLinks?.map((item) => {
              return <li key={item.id}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
