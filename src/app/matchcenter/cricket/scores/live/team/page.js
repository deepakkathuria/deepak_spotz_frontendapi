import React from "react";
import ScorePanel from "../../../../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../../../../components/scorePage/NavBarSec";
import AudioBar from "../../../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../../../components/scores/NavBarTertiary";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <ScorePanel />
        <AudioBar />
        <NavBarTertiary activeTab="teams" />
      </div>
    </>
  );
};

export default page;
