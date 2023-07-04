import React from "react";
import styles from "./NavBarTertiary.module.css";
import InfoTable from "./InfoTable";
import Commentary from "../scorePage/Commentary";

const NavBarTertiary = (props) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.active}>Info</p>
        <p>Commentary</p>
        <p>Live Blog</p>
        <p>Scorecard</p>
        <p>Teams</p>
        <p>Videos</p>
        <p>News</p>
        <p>Photos</p>
        <p>Wagon Wheel</p>
        <p>Manhattan</p>
      </div>

      <div className={styles.containerDetails}>
        {props.activeTab === "commentary" ? <Commentary /> : null}
        {props.activeTab === "live" ? <InfoTable /> : null}
      </div>
    </>
  );
};

export default NavBarTertiary;
