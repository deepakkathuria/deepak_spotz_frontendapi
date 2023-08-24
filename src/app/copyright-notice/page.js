import React from "react";
import styles from "../../components/Static.module.css";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Copyright Notice</h1>
        <div className={styles.content}>
          <p>
            This website and it’s all content is copyright of
            Sportzwiki-Copyright © 2016 Sportzwiki All rights reserved.
          </p>
          <p>
            Any kind of reproduction or redistribution of any part or all of the
            contents in any sort of form is strictly prohibited other than the
            following:
          </p>
          <p>
            You will be able to print or download to a local hard disk extracts
            to use personally and non-commercially.
          </p>
          <p>
            You may copy the content for individual third parties to use it only
            personally, but you have to acknowledge the website as the main
            source of the material
          </p>
          <p>
            You might not, except with our express written permission,
            distribute or exploit commercially our content. You are not
            authorised to store it or transmit it in any other website or other
            kind of electronic retrieval system.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
