import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container0}>
          <div className="logo">
            <Image
              src="/gaurav/sportzwiki_logo.svg"
              width={240}
              height={80}
              alt="SportzWiki Logo"
            />
          </div>
          <div className="copyright">
            ©️ 2023 SportzWiki 2014-23. All rights reserved.
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.heading}>Teams</div>
          <ul className={styles.listUl}>
            <li>
              <a href="/wiki/india-national-cricket-team/">
                India National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/afghanistan-national-cricket-team/">
                Afganistan National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/australia-national-cricket-team/">
                Australia National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/bangladesh-national-cricket-team/">
                Bangladesh National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/england-cricket-team/">England Cricket Team</a>
            </li>
            <li>
              <a href="/wiki/ireland-cricket-team/">Ireland Cricket Team</a>
            </li>
            <li>
              <a href="/wiki/new-zealand-national-cricket-team/">
                New Zealand National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/pakistan-national-cricket-team/">
                Pakistan National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/south-africa-national-cricket-team/">
                South Africa National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/sri-lanka-national-cricket-team/">
                Sri Lanka National Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/west-indies-cricket-team/">
                West Indies Cricket Team
              </a>
            </li>
            <li>
              <a href="/wiki/zimbabwe-national-cricket-team/">
                Zimbabwe National Cricket Team
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.container2}>
          <div className={styles.heading}>Site Links</div>
          <ul className={styles.listUl}>
            <li>
              <a href="/aboutus">About us</a>
            </li>
            <li>
              <a href="/dmca">DMCA</a>
            </li>
            <li>
              <a href="/disclaimer">Disclaimer</a>
            </li>
            <li>
              <a href="/copyright-notice">Copyright Notice</a>
            </li>
            <li>
              <a href="/privacy-and-cookies-policy">
                Privacy and cookies Policy
              </a>
            </li>
            <li>
              <a href="/sitemap.xml">Sitemap</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
