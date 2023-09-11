"use client";
// import React from "react";
// import styles from "../styles/breadcrumb.module.css";
// import Link from "next/link";

// const Breadcrumb = (props) => {
//   function stripHtml(html) {
//     if (typeof window !== "undefined") {
//       var doc = new DOMParser().parseFromString(html, "text/html");
//       return doc.body.textContent || "";
//     }
//     return html; // default return in non-browser environments
//   }

//   return (
//     <>
//       <div className={styles.breadCrumbContainer}>
//         <ul className={styles.breadCrumbUl}>
//           {props.breadcrumbsObj?.map((breadCrumb, index) => (
//             <li key={breadCrumb.name}>
//               <a href={breadCrumb.url}>{stripHtml(breadCrumb.name)}</a>
//               {props.breadcrumbsObj?.length - 1 !== index && <i> /</i>}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Breadcrumb;

// "use strict";
import React from "react";
import styles from "../styles/breadcrumb.module.css";
import Link from "next/link";

const Breadcrumb = (props) => {
  function stripHtml(html) {
    if (typeof window !== "undefined") {
      var doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    }
    return html; // default return in non-browser environments
  }

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
                {capitalizeFirstLetter(stripHtml(breadCrumb.name))}
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
