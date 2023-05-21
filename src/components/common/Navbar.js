import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
