"use client";
// import Script from "next/script";

// const CustomAd3 = () => {
//   return (
//     <>
//       <Script
//         async
//         src="https://cdn.unibotscdn.com/ubplayer/player.js"
//       ></Script>
//       <div id="div-ub-sportzwiki">
//         {/* <Script id="custom-ad-3" strategy="lazyOnload">
//           {`window.unibots = window.unibots || { cmd: [] };
//             unibots.cmd.push(()=>{ unibotsPlayer("sportzwiki"); })
//             `}
//         </Script> */}
//         <Script id="custom-ad-3" strategy="lazyOnload">
//           {`
//     try {
//       window.unibots = window.unibots || { cmd: [] };
//       unibots.cmd.push(() => { unibotsPlayer("sportzwiki"); });
//     } catch (error) {
//       console.error("Error initializing unibotsPlayer:", error);
//     }
//   `}
//         </Script>
//       </div>
//     </>
//   );
// };

// export default CustomAd3;

import Script from "next/script";

const CustomAd3 = () => {
  return (
    <>
      <Script
        async
        // strategy="defer"
        src="https://cdn.unibotscdn.com/ubplayer/player.js"
        // strategy="lazyOnLoad"
      ></Script>
      {/* <div id="div-ub-sportzwiki"> */}
      <Script id="custom-ad-3" strategy="lazyOnload">
        {`
    if (typeof window !== 'undefined') {
      try {
        window.unibots = window.unibots || { cmd: [] };
        unibots.cmd.push(() => { unibotsPlayer("sportzwiki"); });
      } catch (error) {
        console.error("Error initializing unibotsPlayer:", error);
        // Optionally, send this error to your monitoring service here.
      }
    }
  `}
      </Script>
      {/* </div> */}
    </>
  );
};

export default CustomAd3;
