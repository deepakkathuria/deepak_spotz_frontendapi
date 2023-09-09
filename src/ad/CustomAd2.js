"use client";
import Script from "next/script";

const CustomAd2 = () => {
  return (
    <>
      <Script
        id="custom-ad-below-post-mobile"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
              try {
                (function() {
                  var cads = document.createElement("script");
                  cads.async = true;
                  cads.type = "text/javascript";
                  cads.src = "https://static.clmbtech.com/ad/commons/js/82562/colombia_v2.js";
                  var node = document.getElementsByTagName("script")[0];
                  node.parentNode.insertBefore(cads, node);
                })();
              } catch(e) {}
            `,
        }}
      ></Script>
    </>
  );
};

export default CustomAd2;
