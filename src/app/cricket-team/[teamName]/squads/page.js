import React from "react";
import styles from "./teamSquads.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import TeamCountryNav from "../../../../components/teams/TeamCountryNav";
import NavBarSec from "@/components/scorePage/NavBarSec";

const page = () => {
  const currentCountry = "india";
  return (
    <>
      <div className={styles.container}>
      <NavBarSec />
        <div className={styles.soundBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
        <TeamCountryNav active="squads" currentCountry={currentCountry} />
        </div>
      </div>
    </>
  );
};

export default page;
