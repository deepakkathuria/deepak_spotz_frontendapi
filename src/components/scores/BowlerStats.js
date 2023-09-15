import React from "react";
import styles from "./BatsmenStats.module.css";

const BowlerStats = (props) => {
  // console.log(props.data.batsmen, "propeeeestatssssssssssss");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.tableHead}>
          <div className={styles.batter}>Bowler</div>
          <div className={styles.otherDetails}>
            <div>O</div>
            <div>R</div>
            <div>W</div>
            <div>Econ</div>
            <div>Dots</div>
          </div>
        </div>
        {props?.data && props.data?.bowlers ? (
          props.data.bowlers.map((stat, index) => (
            <div key={index} className={styles.tableBody}>
              <div className={styles.nameDetails}>
                <div className={styles.name}>{stat?.name ?? "-"}</div>
                {/* <div className={styles.misc}>{stat.how_out ?? "-"}</div> */}
              </div>
              <div className={styles.otherDetails}>
                <div>{stat.overs ?? "-"}</div>
                <div>{stat.runs_conceded ?? "-"}</div>
                <div>{stat.wickets ?? "-"}</div>
                <div>{stat.econ ?? "-"}</div>
                <div>{stat.maidens ?? "-"}</div>
              </div>
            </div>
          ))
        ) : (
          <div>No bowlers data available</div>
        )}

        {/* <div style={{ display: "flex" }} className={styles.didNotBat}>
          <p>Did not bat:</p>
          {props?.data?.response?.innings[0]?.did_not_bat?.map(
            (item, index) => {
              return (
                <>
                  <div key={index}>{`  ${item.name}, `}</div>
                </>
              );
            }
          )}
        </div> */}
        {/* <div style={{ display: "flex" }} className={styles.fallOfWickets}>
          <p>Fall of wickets:</p>
          {props?.data?.response?.innings[0]?.fows?.map((item, index) => {
            return (
              <>
                <div key={index}>{`${item.name}, `}</div>
              </>
            );
          })}
        </div> */}
        {/* <div className={styles.tableBody}>
          <div className={styles.nameDetails}>
            <div className={styles.name}>Mithali Raj</div>
            <div className={styles.misc}>b vrinda singh</div>
          </div>
          <div className={styles.otherDetails}>
            <div>12</div>
            <div>15</div>
            <div>2</div>
            <div>0</div>
            <div>80.00</div>
          </div>
        </div> */}

        {/* <div className={styles.tableBody}>
          <div className={styles.nameDetails}>
            <div className={styles.name}>Mithali Raj</div>
            <div className={styles.misc}>b vrinda singh</div>
          </div>
          <div className={styles.otherDetails}>
            <div>12</div>
            <div>15</div>
            <div>2</div>
            <div>0</div>
            <div>80.00</div>
          </div>
        </div> */}

        {/*  <div className={styles.tableBody}>
          <div className={styles.nameDetails}>
            <div className={styles.name}>Mithali Raj</div>
            <div className={styles.misc}>b vrinda singh</div>
          </div>
          <div className={styles.otherDetails}>
            <div>12</div>
            <div>15</div>
            <div>2</div>
            <div>0</div>
            <div>80.00</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BowlerStats;
