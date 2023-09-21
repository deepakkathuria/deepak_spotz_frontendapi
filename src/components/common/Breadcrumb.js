import React from "react";
import styles from "../styles/breadcrumb.module.css";
import parse from "html-react-parser";

const Breadcrumb = (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
