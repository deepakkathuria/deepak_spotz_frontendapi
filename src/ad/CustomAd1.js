"use client";
import { useEffect } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";

const CustomAd1 = () => {
  return (
    <>
      <Script id="show-banner">
        {`			(function() {
				  var cads = document.createElement("script");
				  cads.async = true;
				  cads.type = "text/javascript";
				  cads.src = "https://static.clmbtech.com/ad/commons/js/82562/colombia_v2.js";
				  var node = document.getElementsByTagName("script")[0];
				  node.parentNode.insertBefore(cads, node);
			})();`}
      </Script>

      <div
        id="div-clmb-ctn-515735-1"
        style={{ float: "left", minHeight: "2px", width: "100%" }}
        data-slot="515735"
        data-position="1"
        data-section="ArticleShow"
        data-ua="M"
        className="colombia"
      ></div>
    </>
  );
};

export default dynamic(() => Promise.resolve(CustomAd1), { ssr: false });
