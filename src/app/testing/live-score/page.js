"use client";
import React from "react";
import UpdatesSound from "@/components/common/UpdatesSound";
import NavBarSec from "@/components/scorePage/NavBarSec";
import LiveScoreNav from "@/components/liveScore/LiveScoreNav";
import styles from "./liveScore.module.css";
import ScoreCard from "@/components/common/ScoreCard";
import useSWR from "swr";
import { mutate } from "swr";

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("An error occurred while fetching the data.");
  }
  return response.json();
};

const Page = async () => {
  const {
    data: product,
    error,
    isLoading,
  } = useSWR(
    `https://sea-turtle-app-xmphx.ondigitalocean.app/api/v1/livescore`,
    fetcher,
    {
      refreshInterval: 10000,
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const optimisticData = product.map((match, index) => {
    match.teamAScores += 1;
    return match;
  });

  // Update the UI with the optimistic data
  const updateUI = () => {
    const newProduct = optimisticData;
    // Update the state with the new data
    mutate(
      `https://sea-turtle-app-xmphx.ondigitalocean.app/api/v1/livescore`,
      newProduct,
      {
        // shouldFetch: true,
        // revalidate:1
        // refreshInterval: 1000,
      }
    );
  };

  // setTimeout(updateUI, 100);

  return (
    <>
      <div className="container marginTop4">
        <NavBarSec />
        <div className={styles.liveScorePage}>
          <div style={{ marginTop: "2rem" }} className={styles.updateSoundDiv}>
            <UpdatesSound />
          </div>
          <LiveScoreNav />

          <div className={styles.liveScoreSectionDiv}>
            <p className={styles.liveScoreSectionDivHeading}>
              Sri Lanka Tour of india 2022
            </p>

            <div className={styles.scoresPanel}>
              {product?.map((match, index) => {
                return (
                  <ScoreCard
                    key={index}
                    matchID={match?.match_id}
                    title={match?.short_title ? match.short_title : "no title"}
                    teamAName={match?.teama_name ? match.teama_name : "NA"}
                    teamBName={match?.teamb_name}
                    teamAScores={match?.teama_scores}
                    teamBScores={match?.teamb_scores}
                    teamAOvers={match?.teama_overs}
                    teamBOvers={match?.teamb_overs}
                    teamALogo={match?.teama_logo_url}
                    teamBLogo={match?.teamb_logo_url}
                    matchScoreDetails={
                      match?.status_note
                        ? match.status_note
                        : "no status information"
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
