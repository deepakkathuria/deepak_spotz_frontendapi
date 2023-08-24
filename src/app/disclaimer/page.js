import React from "react";
import styles from "../../components/Static.module.css";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.heading}>Disclaimer</h1>
        <div className={styles.content}>
          <p>
            All the information contained in our website is to serve the general
            information purposes. The information is brought to you by
            Sportzwiki.com and while we focus on keeping the information up to
            date and correct, we don’t deal with representations or warranties
            of any such kind, express or implied, about the completeness,
            reliability, accuracy, availability or suitability or availability
            of the website or the information, products, services, or related
            graphics displayed on our website for any purpose. Any kind of
            reliance you offer on such information is strictly at your own risk.
          </p>
          <p>
            In no event we will be liable to any loss or damage which includes
            without limitation, indirect or consequential damage or loss or, or
            any loss or damage whatever comes up from loss of data or profits
            arising from that, or in connection with the use of Sportzwiki.com.
          </p>
          <p>
            By using this website you can link to several other websites which
            are not at all controlled by Sportzwiki. We have also no such
            control regarding the content, nature and availability of those
            sites. The inclusion of any external links does not give a
            recommendation or support the views expressed within them.
          </p>
          <p>
            We make every effort to keep our website running smoothly. However,
            Sportzwiki has no responsibility for, and will not be liable if the
            website becomes temporarily unavailable because of technical issues
            beyond our control.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
