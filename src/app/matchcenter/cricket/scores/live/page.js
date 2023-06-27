import React from "react";
import ScorePanel from "@/components/scorePage/ScorePanel";
import NavBarSec from "@/components/scorePage/NavBarSec";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <ScorePanel />
      </div>
    </>
  );
};

export default page;
