import React from "react";
import styles from "./playerNews.module.css";
import NewsSection from "../../../../../components/common/NewsSection";
import UpdatesSound from "../../../../../components/common/UpdatesSound";
import NavBarSec from "@/components/scorePage/NavBarSec";
import PlayersNav from "@/components/testing/players/PlayersNav";
import OrganisationLd from "@/json-ld/OrganisationLd";


const page = ({ params }) => {
  const { country, player } = params;
  return (
    <>
      <OrganisationLd />
      <div className={styles.container}>
        <NavBarSec active="players" />
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <div className="nav">
          <div className={styles.nav}>
            <PlayersNav country={country} player={player} active={"news"} />
          </div>
        </div>
        <div className="news">
          <NewsSection name="" id="3" slug="cricket" />
          <NewsSection name="" id="3" slug="cricket" />
          <NewsSection name="" id="3" slug="cricket" />
        </div>
      </div>
    </>
  );
};

export default page;
