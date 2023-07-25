import React from "react";
import ScorePanel from "../../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../../components/scorePage/NavBarSec";
import AudioBar from "../../../../components/scores/AudioBar";
import NavBarTertiary from "../../../../components/scores/NavBarTertiary";
import InfoTable from "@/components/scores/InfoTable";
import Link from "next/link";
import styles from "../../../../components/scores/NavBarTertiary.module.css";
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
  // const {`series-id`} = params
  const { "series-id": seriesId } = params;
  const seriesIdInt = parseInt(seriesId, 10);

  const { "series-name": seriesName } = params;
  // const { 'series-id': seriesId } = params;

  const matchInfo = await fetchMatchInfo(seriesIdInt);

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
      name: `LIVE CRICKET SCORECARD`,
      url: "/",
    },
  ];
  // console.log(matchInfo, "matchInfonsjdkbvkbdvj");

  // console.log(seriesName, "iddddd", typeof seriesName);
  return (
    <>
      <div className="container marginTop4" style={{ marginBottom: "4rem" }}>
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
            <div className="nav">
              <div className={styles.container}>
                <Link href={`cricket-series/${seriesIdInt}/${seriesName}`}>
                  <p className={styles.active}>Info</p>
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
                  <p>Teams</p>
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

            <InfoTable
              matchFormat={`${matchInfo?.competition_title ?? ""} ${
                matchInfo?.format_str ?? ""
              }`}
              series={matchInfo?.competition_title ?? ""}
              date={new Date(matchInfo?.start_date).toLocaleDateString() ?? ""}
              time={
                new Date(matchInfo?.start_timestamp).toLocaleTimeString() ?? ""
              }
              venueName={matchInfo?.venue_name ?? ""}
              venueCountry={matchInfo?.venue_country ?? ""}
              stadium={matchInfo?.venue_name ?? ""}
              venueLocation={matchInfo?.venue_location ?? ""}
              umpires={matchInfo?.umpires ?? ""}
              referee={matchInfo?.referee ?? ""}
            />
          </div>
          <div className={styles.containerRight}>
            <PostListBar
            category='cricket'/>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
