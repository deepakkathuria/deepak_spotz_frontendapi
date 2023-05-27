"use client";
import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { navBarLinks } from "@/utils/navLinks";
// import HamburgerIcon from "../../../public/images/menu_ic.png";
// import { FcHome } from "react-icons/fc";
// import {
//   GiCricketBat,
//   GiSoccerBall,
//   GiConsoleController,
// } from "react-icons/gi";
// import { SiWwe } from "react-icons/si";
// import { IoIosArrowDown } from "react-icons/io";
// import { BiSearchAlt } from "react-icons/bi";
// import { CgProfile, CgMenuMotion } from "react-icons/cg";
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
            <Link href={"#"}>
              <Image
                src="/gaurav/sportzwiki_logo.svg"
                width={130}
                height={30}
                alt="SportzWiki Logo"
              />
            </Link>
          </div>
          <div className={styles.NavbarOption}>
            <ul>
              <Link href={"#"}>
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
              </Link>

              <Link href={"#"}>
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
              </Link>

              <Link href={"#"}>
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
              </Link>

              <Link href={"#"}>
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
              </Link>

              <Link href={"#"}>
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
              </Link>

              <Link href={"#"}>
                <li className={styles.navLi}>
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
              </Link>
            </ul>
          </div>
          <div className={styles.navOptions}>
            <Link href={"#"}>
              <div className="navSearch">
                <Image
                  src="/gaurav/search_ic.svg"
                  alt="search icon"
                  width={22}
                  height={22}
                  // className={styles.plainIc}
                />
              </div>
            </Link>
            <Link href={"#"}>
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
            </Link>
            <Link href={"#"}>
              <div className="navHamburger">
                {/* <CgMenuMotion color="#fff" size={20} /> */}
              </div>
            </Link>
            <div className={styles.navOptionsMobile}>
              <div className="hamburger-ic">
                <Image
                  src="/gaurav/Menu_ic.svg"
                  alt="hamburger menu icon"
                  width={25}
                  height={25}
                  // 20 /20 size
                  // className={styles.plainIc}
                  style={{ color: "#98CCFF", fill: "#98CCFF", stroke:"#98CCFF" }}
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
