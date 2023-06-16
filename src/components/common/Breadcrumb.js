import React from "react";
import styles from "../styles/breadcrumb.module.css";
import Link from "next/link";

const Breadcrumb = (props) => {
  return (
    <>
      <div className={styles.breadCrumbContainer}>
        <ul className={styles.breadCrumbUl}>
          {props.breadcrumbsObj?.map((breadCrumb, index) => (
            <li key={breadCrumb.name}>
              <a href={breadCrumb.url}>{breadCrumb.name}</a>
              {props.breadcrumbsObj?.length - 1 !== index && <i> /</i>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
