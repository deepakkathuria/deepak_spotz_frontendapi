import React from "react";
import UpdatesSound from "@/components/common/UpdatesSound";
import NavBarSec from "@/components/scorePage/NavBarSec";
import TeamsPageNav from "@/components/teams/TeamsPageNav";
import TeamsTable from "@/components/teams/TeamsTable";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div style={{ marginTop: "2rem" }} className="audio">
          <UpdatesSound />
        </div>
        <div style={{ marginTop: "2rem" }} className="nav">
          <TeamsPageNav />
        </div>
        <div style={{ marginTop: "2rem" }} className="table">
          <TeamsTable />
        </div>
      </div>
    </>
  );
};

export default page;
