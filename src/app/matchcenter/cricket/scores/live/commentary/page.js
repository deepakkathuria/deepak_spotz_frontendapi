import NavBarSec from "@/components/scorePage/NavBarSec";
import ScorePanel from "@/components/scorePage/ScorePanel";
import AudioBar from "@/components/scores/AudioBar";
import NavBarTertiary from "@/components/scores/NavBarTertiary";
import React from "react";
import CommentaryBox from "@/components/scorePage/Commentary/CommentaryBox";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <ScorePanel />
        <AudioBar />
        <NavBarTertiary activeTab="commentary" />
        <div className="commentaries">
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
          <CommentaryBox />
        </div>
      </div>
    </>
  );
};

export default page;
