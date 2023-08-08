import React from "react";
import styles from "./squads.module.css";
import UpdatesSound from "@/components/common/UpdatesSound";
import TeamCountryNav from "@/components/teams/TeamCountryNav";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="soundBox">
          <UpdatesSound />
        </div>
        <div className="nav">
          <TeamCountryNav />
        </div>
      </div>
    </>
  );
};

export default page;
