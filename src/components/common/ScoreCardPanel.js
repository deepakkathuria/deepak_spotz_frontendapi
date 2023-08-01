"use client";
import React from "react";
import ScoreCard from "./ScoreCard";
import styles from "../styles/ScoreCardPanel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import { getLiveScoreData } from "@/lib/PostDataFetch";
import Link from "next/link";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const key = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
// import ScorePanel from "../scorePage/ScorePanel";

// const getData = async () => {
//   const res = await fetch(`${base_url}/matches?token=${key}&status=3`, { cache: "no-store" });
//   return await res.json();
// };

const getData = async () => {
  const res = await fetch(`${base_url}/matches?token=${key}&status=3`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.response.items;
};

const ScoreCardPanel = async (props) => {
  // console.log(data, "dataaaaaa");
  const data = await getData();
  // console.log(data, "dataaaaaa");

  const PrevArrow = ({ onClick }) => (
    <div
      className={`${styles.sliderArrow} ${styles.prevArrow}`}
      onClick={onClick}
    >
      <Image
        src="/gaurav/arrow-left-c.svg"
        width={10}
        height={10}
        alt="arrow-left"
      />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className={`${styles.sliderArrow} ${styles.nextArrow}`}
      onClick={onClick}
    >
      <Image
        src="/gaurav/arrow-right-c.svg"
        width={10}
        height={10}
        alt="arrow-right"
      />
    </div>
  );

  var settings = {
    // dots: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 4000,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <>
      {props?.display === true && (
        <div className={styles.scoreCardMatchTypeSelector}>
          <div className={styles.matchTimingSelector}>
            <button
              className={`${styles.matchTimingSelectorButton} ${styles.selected}`}
            >
              Live (10)
            </button>
            <button className={styles.matchTimingSelectorButton}>Recent</button>
            <button className={styles.matchTimingSelectorButton}>
              Upcoming
            </button>
          </div>

          <div className={styles.matchTypeSelector}>
            <button
              className={`${styles.matchTypeSelectorButton} ${styles.selected}`}
            >
              All
            </button>
            <button className={styles.matchTypeSelectorButton}>
              International
            </button>
            <button className={styles.matchTypeSelectorButton}>League</button>
            <button className={styles.matchTypeSelectorButton}>Domestic</button>
          </div>
        </div>
      )}
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {data?.map((match, index) => {
            // console.log("Match title", match.title);
            return (
              // <h1>djnkdf</h1>
              <ScoreCard
                key={index}
                matchID={match?.match_id}
                title={match?.short_title ? match.short_title : "no title"}
                teamAName={match?.teama.name ? match?.teama.name : "NA"}
                teamBName={match?.teamb.name}
                teamAScores={match?.teama.scores}
                teamBScores={match?.teamb.scores}
                teamAOvers={match?.teama.overs}
                teamBOvers={match?.teamb.overs}
                teamALogo={match?.teama.logo_url}
                teamBLogo={match?.teamb.logo_url}
                matchScoreDetails={
                  match?.status_note
                    ? match.status_note
                    : "no status information"
                }
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default ScoreCardPanel;
// export default dynamic(() => Promise.resolve(ScoreCardPanel, { ssr: false }));
