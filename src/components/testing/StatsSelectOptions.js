import React from "react";
import styles from "./StatsSelectOptions.module.css";

const StatsSelectOptions = () => {
  return (
    <>
      <div className={styles.customSelect}>
        <select>
          <option value="0">Option Select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
          <option value="6">Option 6</option>
        </select>
      </div>
    </>
  );
};

export default StatsSelectOptions;
