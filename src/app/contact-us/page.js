import React from "react";
import styles from "../../components/Static.module.css";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Contact us</h1>
        <div className={styles.content}>
          <h2>Sportzwiki</h2>
          <p>C-81, Vyapar Kendra ( PVK),</p>
          <p>Palam Vihar, Gurgaon – haryana ( 122017 )</p>
          <p>Email : enquiry@sportzwiki.com</p>
          <p>Contact: 0124-4284294</p>
        </div>
      </div>
    </>
  );
};

export default page;
