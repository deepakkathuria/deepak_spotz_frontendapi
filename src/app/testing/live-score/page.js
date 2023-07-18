// import React from "react";
// import UpdatesSound from "@/components/common/UpdatesSound";
// import NavBarSec from "@/components/scorePage/NavBarSec";
// import LiveScoreNav from "@/components/liveScore/LiveScoreNav";
// import styles from "./liveScore.module.css";
// import ScoreCard from "@/components/common/ScoreCard";

// import { getLiveScoreData } from "@/lib/PostDataFetch";

// const page = async () => {
//   const data = await getLiveScoreData();
//   return (
//     <>
//       <div className="container marginTop4">
//         <NavBarSec />
//         <div className={styles.liveScorePage}>
//           <div style={{ marginTop: "2rem" }} className={styles.updateSoundDiv}>
//             <UpdatesSound />
//           </div>
//           <LiveScoreNav />

//           <div className={styles.liveScoreSectionDiv}>
//             <p className={styles.liveScoreSectionDivHeading}>
//               Sri Lanka Tour of india 2022
//             </p>

//             <div className={styles.scoresPanel}>
//               {data[0].data.map((match, index) => {
//                 return (
//                   <ScoreCard
//                     key={index}
//                     title={match.title ? match.title : "no title"}
//                     teamAName={match.teama.name}
//                     teamBName={match.teamb.name}
//                     teamAScores={match.teama.scores}
//                     teamBScores={match.teamb.scores}
//                     teamAOvers={match.teama.overs}
//                     teamBOvers={match.teamb.overs}
//                     teamALogo={match.teama.logo_url}
//                     teamBLogo={match.teamb.logo_url}
//                     matchScoreDetails={match.live ? match.live : "nothing here"}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default page;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page