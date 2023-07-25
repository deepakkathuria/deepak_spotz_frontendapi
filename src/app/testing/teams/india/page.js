import React from "react";
import UpdatesSound from "@/components/common/UpdatesSound";
import styles from "./india.module.css";
import TeamCountryNav from "@/components/teams/TeamCountryNav";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <div className={styles.soundUpdatesDiv}>
          <UpdatesSound />
        </div>
        <div className={styles.TeamCountryNavDiv}>
          <TeamCountryNav />
        </div>

        <div className={styles.aboutTeam}>
          <div className={styles.teamTable}>
            <div className={styles.teamLogo}>
              <Image
                src={
                  "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1689677921/Cricket_India_Crest-768x768_wed7tu.jpg"
                }
                alt="Cricket Team Logo"
                height={130}
                width={130}
              />
            </div>
            <div className={styles.infoTable}>
              <div className={styles.column}>
                <p className={styles.infoName}>Full Name</p>
                <p className={styles.infoDetail}>India National Cricket Team</p>
              </div>
              <div className={styles.column}>
                <p className={styles.infoName}>Full Name</p>
                <p className={styles.infoDetail}>India National Cricket Team</p>
              </div>
              <div className={styles.column}>
                <p className={styles.infoName}>Full Name</p>
                <p className={styles.infoDetail}>India National Cricket Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
