import React from "react";
import NavBarSec from "@/components/scorePage/NavBarSec";
import UpdatesSound from "@/components/common/UpdatesSound";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div style={{ marginTop: "2rem" }} className="soundUpdateDiv">
          <UpdatesSound />
        </div>
      </div>
    </>
  );
};

export default page;
