import React from "react";
import styles from "../styles/breadcrumb.module.css";
import parse from "html-react-parser";

const Breadcrumb = (props) => {
  function capitalizeFirstLetter(string) {
    if (typeof string === "string") {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // Handle cases where string is not a string, e.g., if it's not defined.
    return string;
  }

  return (
    <>
      <div className={styles.breadCrumbContainer}>
        <ul className={styles.breadCrumbUl}>
          {props.breadcrumbsObj?.map((breadCrumb, index) => (
            <li key={breadCrumb.name}>
              <a href={breadCrumb.url}>
                {capitalizeFirstLetter(parse(breadCrumb.name))}
              </a>
              {props.breadcrumbsObj?.length - 1 !== index && <i> /</i>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
