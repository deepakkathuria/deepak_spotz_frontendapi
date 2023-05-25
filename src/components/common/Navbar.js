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
                src="https://i0.wp.com/sportzwiki.com/wp-content/uploads/2021/02/SW.png?fit=200%2C40&ssl=1"
                width={136}
                height={14}
                alt="SportzWiki Logo"
              />
            </Link>
          </div>
          <div className={styles.NavbarOption}>
            <ul>
              <Link href={"#"}>
                <li className={styles.navLi}>
                  <div className="navItemIcon">
                    {/* <FcHome size={"15px"} /> */}
                  </div>
                  <div className="navItemName">Home</div>
                </li>
              </Link>

              <Link href={"#"}>
                <li className={styles.navLi}>
                  <div className="navItemIcon">
                    {/* <GiCricketBat size={"15px"} /> */}
                  </div>
                  <div className="navItemName">Cricket</div>
                </li>
              </Link>

              <Link href={"#"}>
                <li className={styles.navLi}>
                  <div className="navItemIcon">
                    {/* <GiSoccerBall size={"15px"} /> */}
                  </div>
                  <div className="navItemName">Football</div>
                </li>
              </Link>

              <Link href={"#"}>
                <li className={styles.navLi}>
                  <div className="navItemIcon">
                    {/* <SiWwe size={"15px"} /> */}
                  </div>
                  <div className="navItemName">WWE</div>
                </li>
              </Link>

              <Link href={"#"}>
                <li className={styles.navLi}>
                  <div className="navItemIcon">
                    {/* <GiConsoleController size={"18px"} /> */}
                  </div>
                  <div className="navItemName">Esports</div>
                </li>
              </Link>

              <Link href={"#"}>
                <li className={styles.navLi}>
                  <div className="navItemIcon">
                    {/* <IoIosArrowDown size={"18px"} /> */}
                  </div>
                  <div className="navItemName">More</div>
                </li>
              </Link>
            </ul>
          </div>
          <div className={styles.navOptions}>
            <Link href={"#"}>
              <div className="navSearch">
                {/* <BiSearchAlt color="#fff" size={"20"} /> */}
              </div>
            </Link>
            <Link href={"#"}>
              <div className={styles.navLogin}>
                {/* <CgProfile color="#fff" size={"20"} /> */}
                <div className={styles.navLoginText}>Login/SignUp</div>
              </div>
            </Link>
            <Link href={"#"}>
              <div className="navHamburger">
                {/* <CgMenuMotion color="#fff" size={20} /> */}
              </div>
            </Link>
            <div className={styles.navOptionsMobile}></div>
          </div>
          <div className="hamburger-ic">
            <Image
              src="https://res.cloudinary.com/dbb7g0jqa/image/upload/v1684927069/sportzwiki/menu-motion-svgrepo-com_ds6v8o.svg"
              width={20}
              height={20}
              alt="menu_ic"
              style={{ fill: "white", color: "white", overflow: "hidden" }}
              onClick={showSidebar}
            />
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
