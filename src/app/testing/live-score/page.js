"use client";
import React, { useState, useEffect } from "react";
import ScorePanel from "../../../components/scorePage/ScorePanel";
import NavBarSec from "../../../components/scorePage/NavBarSec";
import AudioBar from "../../../components/scores/AudioBar";
import NavBarTertiary from "../../../components/scores/NavBarTertiary";
import InfoTable from "../../../components/scores/InfoTable";
import Link from "next/link";
import styles from "../../../components/scores/NavBarTertiary";
import UpdatesSound from "../../../components/common/UpdatesSound";
const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import Breadcrumb from "../../../components/common/Breadcrumb";
import PostListBar from "../../../components/common/PostListBar";
import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
import EventLd from "../../../json-ld/EventLd";
import NavSecScore from "../../../components/liveScore/NavSecScore";
const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchMatchInfo = async (matchId) => {
  // console.log(matchId, "matchID");
  const res = await fetch(`${baseUrl}/matches/${matchId}/info?token=${key}`, {
    next: { revalidate: 2 },
  });
  const matchInfo = await res.json();
  // console.log(matchInfo, "matchInfo");
  return matchInfo;
};

const fetchMatchScoreCard = async (matchId) => {
  const res = await fetch(`${baseUrl}/matches/${matchId}/live?token=${key}`, {
    next: { revalidate: 2 },
  });
  const scoreCard = await res.json();
  return scoreCard;
};

const Page = () => {
  const seriesIdInt = 66086;
  const [scoreCard, setScoreCard] = useState(null);
  const [matchInfo, setMatchInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedScoreCard = await fetchMatchScoreCard(seriesIdInt);
        const fetchedMatchInfo = await fetchMatchInfo(seriesIdInt);

        setScoreCard(fetchedScoreCard);
        setMatchInfo(fetchedMatchInfo);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();

    const intervalId = setInterval(fetchData, 10000); // Poll every 10 seconds

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [seriesIdInt]);

  console.log(
    scoreCard?.response.batsmen[0],
    "scoreCardscoreCardscoreCardscoreCard"
  );
  return (
    <div style={{ marginTop: "6rem" }}>
      <h2>data here</h2>
      {/* <h1>{scoreCard?.response.batsmen[0].name}</h1> */}
      {/* <ScorePanel
        logoTeamA={matchInfo?.teama?.logo_url ?? ""}
        logoTeamB={matchInfo?.teamb?.logo_url ?? ""}
        nameTeamA={matchInfo?.teama?.name ?? ""}
        nameTeamB={matchInfo?.teamb?.name ?? ""}
        overTeamA={matchInfo?.teama?.overs ?? ""}
        overTeamB={matchInfo?.teamb?.overs ?? ""}
        scoreTeamA={matchInfo?.teama?.scores ?? ""}
        scoreTeamB={matchInfo?.teamb?.scores ?? ""}
        currentStatus={matchInfo?.status_note ?? ""}
        // ************************************
        batsA={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 0
            ? scoreCard.response.batsmen[0].name ?? ""
            : ""
        }
        batsB={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 1
            ? scoreCard.response.batsmen[1].name ?? ""
            : ""
        }
        batsman_idA={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 0
            ? scoreCard.response.batsmen[0].batsman_id ?? ""
            : ""
        }
        batsman_idB={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 1
            ? scoreCard.response.batsmen[1].batsman_id ?? ""
            : ""
        }
        runsA={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 0
            ? scoreCard.response.batsmen[0].runs ?? ""
            : ""
        }
        runsB={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 1
            ? scoreCard.response.batsmen[1].runs ?? ""
            : ""
        }
        balls_facedA={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 0
            ? scoreCard.response.batsmen[0].balls_faced ?? ""
            : ""
        }
        balls_facedB={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 1
            ? scoreCard.response.batsmen[1].balls_faced ?? ""
            : ""
        }
        foursA={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 0
            ? scoreCard.response.batsmen[0].fours ?? ""
            : ""
        }
        foursB={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 1
            ? scoreCard.response.batsmen[1].fours ?? ""
            : ""
        }
        sixesA={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 0
            ? scoreCard.response.batsmen[0].sixes ?? ""
            : ""
        }
        sixesB={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 1
            ? scoreCard.response.batsmen[1].sixes ?? ""
            : ""
        }
        strike_rateA={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 0
            ? scoreCard.response.batsmen[0].strike_rate ?? ""
            : ""
        }
        strike_rateB={
          scoreCard?.response?.batsmen && scoreCard.response.batsmen.length > 1
            ? scoreCard.response.batsmen[1].strike_rate ?? ""
            : ""
        }
        // bowlers data
        bowlerNameA={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 0
            ? scoreCard.response.bowlers[0].name ?? ""
            : ""
        }
        bowlerNameB={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 1
            ? scoreCard.response.bowlers[1].name ?? ""
            : ""
        }
        bowlerIdA={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 0
            ? scoreCard.response.bowlers[0].bowler_id ?? ""
            : ""
        }
        bowlerIdB={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 1
            ? scoreCard.response.bowlers[1].bowler_id ?? ""
            : ""
        }
        bowlerOversA={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 0
            ? scoreCard.response.bowlers[0].overs ?? ""
            : ""
        }
        bowlerOversB={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 1
            ? scoreCard.response.bowlers[1].overs ?? ""
            : ""
        }
        bowlerRunsConcededA={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 0
            ? scoreCard.response.bowlers[0].runs_conceded ?? ""
            : ""
        }
        bowlerRunsConcededB={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 1
            ? scoreCard.response.bowlers[1].runs_conceded ?? ""
            : ""
        }
        bowlerWicketsA={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 0
            ? scoreCard.response.bowlers[0].wickets ?? ""
            : ""
        }
        bowlerWicketsB={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 1
            ? scoreCard.response.bowlers[1].wickets ?? ""
            : ""
        }
        bowlerMaidensA={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 0
            ? scoreCard.response.bowlers[0].maidens ?? ""
            : ""
        }
        bowlerMaidensB={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 1
            ? scoreCard.response.bowlers[1].maidens ?? ""
            : ""
        }
        bowlerEconA={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 0
            ? scoreCard.response.bowlers[0].econ ?? ""
            : ""
        }
        bowlerEconB={
          scoreCard?.response?.bowlers && scoreCard.response.bowlers.length > 1
            ? scoreCard.response.bowlers[1].econ ?? ""
            : ""
        }
      /> */}
      <div style={{fontSize:'2rem'}}>{JSON.stringify(matchInfo)}</div>
      <div style={{fontSize:'2rem'}}>{JSON.stringify(scoreCard)}</div>
    </div>
  );
};

export default Page;
