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

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // JavaScript months are 0-11, so we add 1
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const formattedDate = `${getCurrentDate()}_${getCurrentDate()}`;
console.log(formattedDate);

const getData = async () => {
  const res = await fetch(
    `${base_url}/matches?token=${key}&date=${formattedDate}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.response.items;
};

const ScoreCardPanel = async (props) => {
  const data = await getData();

  function customSort(a, b) {
    const statusOrder = { 3: 0, 1: 1, 2: 2, 4: 3 };
    const statusA = a.status.toString();
    const statusB = b.status.toString();

    return statusOrder[statusA] - statusOrder[statusB];
  }

  // Sort the API responses using the custom sorting function
  const sortedResponses = data.slice().sort(customSort);

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
    // autoplay: true,
    // autoplaySpeed: 4000,
    // infinite: true,
    speed: 500,
    // slidesToShow: 1,
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
              All
            </button>
            <button className={`${styles.matchTimingSelectorButton}`}>
              <Link href={"/live-cricket-scores"}>Live</Link>
            </button>
            <button className={styles.matchTimingSelectorButton}>
              <Link href={"/live-cricket-scores/completed"}>Recent</Link>
            </button>
            <button className={styles.matchTimingSelectorButton}>
              <Link href={"/live-cricket-scores/upcoming"}></Link>
              Upcoming
            </button>
          </div>
        </div>
      )}
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {sortedResponses?.map((match, index) => {
            return (
              <div key={index} className={styles.customCarouselSlide}>
                <ScoreCard
                  key={index}
                  matchID={match?.match_id}
                  title={match?.short_title ? match.short_title : "no title"}
                  teamAName={match?.teama.name ? match?.teama.name : "-"}
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
                      : "match yet to start"
                  }
                  status={match?.status}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default ScoreCardPanel;
