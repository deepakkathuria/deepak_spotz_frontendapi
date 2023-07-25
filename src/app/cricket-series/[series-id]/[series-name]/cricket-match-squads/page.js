import React from "react";
import ScorePanel from "../../../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../../../components/scorePage/NavBarSec";
import AudioBar from "../../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../../components/scores/NavBarTertiary";
import Link from "next/link";
import styles from "../../../../../components/scores/NavBarTertiary.module.css";
import Teams from "@/components/scores/Teams";
import UpdatesSound from "@/components/common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
import Breadcrumb from "@/components/common/Breadcrumb";
import PostListBar from "@/components/common/PostListBar";

const fetchMatchInfo = async (matchId) => {
  const res = await fetch(`${baseUrl}matches/${matchId}`, {
    next: { revalidate: 2 },
  });
  const matchInfo = await res.json();
  return matchInfo;
};

const page = async ({ params }) => {
  const { "series-id": seriesId } = params;
  const seriesIdInt = parseInt(seriesId, 10);

  const matchInfo = await fetchMatchInfo(seriesIdInt);

  const { "series-name": seriesName } = params;

  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET SERIES`,
      url: "/",
    },
    {
      name: `${seriesName}`.toUpperCase(),
      url: "/",
    },
    {
      name: `CRICKET MATCH SQUAD`,
      url: "/",
    },
  ];
  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.scoreNews}>
          <div className="leftContainer">
            <div
              style={{ marginTop: "2rem" }}
              className={styles.soundUpdateDiv}
            >
              <UpdatesSound />
            </div>
            <ScorePanel
              logoTeamA={matchInfo?.teama_logo_url ?? ""}
              logoTeamB={matchInfo?.teamb_logo_url ?? ""}
              nameTeamA={matchInfo?.teama_name ?? ""}
              nameTeamB={matchInfo?.teamb_name ?? ""}
              overTeamA={matchInfo?.teama_overs ?? ""}
              overTeamB={matchInfo?.teamb_overs ?? ""}
              scoreTeamA={matchInfo?.teama_scores ?? ""}
              scoreTeamB={matchInfo?.teamb_scores ?? ""}
              currentStatus={matchInfo?.status_note ?? ""}
            />
            <AudioBar />
            {/* <NavBarTertiary activeTab="teams" /> */}
            <div className="nav">
              <div className={styles.container}>
                <Link href={`cricket-series/${seriesIdInt}/${seriesName}`}>
                  <p>Info</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-full-commentary`}
                >
                  <p>Commentary</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/live-cricket-match-blog`}
                >
                  <p>Live Blog</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/live-cricket-scorecard/`}
                >
                  <p>Scorecard</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-squads`}
                >
                  <p className={styles.active}>Teams</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-videos`}
                >
                  <p>Videos</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-news`}
                >
                  <p>News</p>
                </Link>
                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-photos`}
                >
                  <p>Photos</p>
                </Link>

                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-wagon`}
                >
                  <p>Wagon Wheel</p>
                </Link>

                <Link
                  href={`cricket-series/${seriesIdInt}/${seriesName}/cricket-match-manhattan`}
                >
                  <p>Manhattan</p>
                </Link>
              </div>
            </div>
            <Teams />
          </div>
          <div className={styles.containerRight}>
            <PostListBar category="cricket" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
