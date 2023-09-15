import React from "react";
import styles from "./BatsmenStats.module.css";

const BatsmenStats = (props) => {
  // console.log(props.data, "propeeeestatssssssssssss");
  return (
    <>
      <div className={styles.container}>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#0c4c8a",
            marginBottom: "1.2rem",
          }}
        >
          {props?.data.name}
        </p>
        <div className={styles.tableHead}>
          <div className={styles.batter}>Batter</div>
          <div className={styles.otherDetails}>
            <div>R</div>
            <div>B</div>
            <div>4s</div>
            <div>6s</div>
            <div>SR</div>
          </div>
        </div>
        {props.data?.batsmen?.map((stat, index) => {
          // console.log(stat, "stateeeeeeeeeeeeeeeeeeeeeeee");
          return (
            <div key={index} className={styles.tableBody}>
              <div className={styles.nameDetails}>
                <div className={styles.name}>{stat?.name ?? "-"}</div>
                <div className={styles.misc}>{stat.how_out ?? "-"}</div>
              </div>
              <div className={styles.otherDetails}>
                <div>{stat.runs ?? "-"}</div>
                <div>{stat.balls_faced ?? "-"}</div>
                <div>{stat.fours ?? "-"}</div>
                <div>{stat.sixes ?? "-"}</div>
                <div>{stat.strike_rate ?? "-"}</div>
              </div>
            </div>
          );
        })}
        <div style={{ display: "flex" }} className={styles.fallOfWickets}>
          <p>Fall of wickets:</p>
          {props?.data && props.data?.fows ? (
            props.data.fows.map((item, index) => (
              <div key={index}>{item.name ?? "-"}</div>
            ))
          ) : (
            <div>No wickets data available</div>
          )}
        </div>

        <div style={{ display: "flex" }} className={styles.didNotBat}>
          <p>Did not bat:</p>
          {props?.data && props.data?.did_not_bat ? (
            props.data.did_not_bat.map((item, index) => (
              <div key={index}>{`  ${item?.name ?? "-"}, `}</div>
            ))
          ) : (
            <div>No did not bat data available</div>
          )}
        </div>

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

export default BatsmenStats;
