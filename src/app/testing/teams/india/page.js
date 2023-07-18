import React from "react";
import UpdatesSound from "@/components/common/UpdatesSound";
import styles from "./india.module.css";
import TeamCountryNav from "@/components/teams/TeamCountryNav";

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
      </div>
    </>
  );
};

export default page;
