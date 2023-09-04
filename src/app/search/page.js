"use client";
import React from "react";
import styles from "./searchPage.module.css";
import SearchBar from "@/components/common/Search";

const page = () => {
  return (
    <>
      <div className={styles.searchPage}>
        <div className={styles.search}>
          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default page;
