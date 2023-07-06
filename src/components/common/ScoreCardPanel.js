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

const ScoreCardPanel = async () => {
  const data = await getLiveScoreData();

  // console.log(data[0].data[0], "liveeeee");

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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <>
      <div className={styles.scoreCardMatchTypeSelector}>
        <div className={styles.matchTimingSelector}>
          <button
            className={`${styles.matchTimingSelectorButton} ${styles.selected}`}
          >
            Live (10)
          </button>
          <button className={styles.matchTimingSelectorButton}>Recent</button>
          <button className={styles.matchTimingSelectorButton}>Upcoming</button>
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
      <div className={styles.carouselContainer}>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
          {data[0].data.map((match, index) => {
            return (
              <ScoreCard
                key={index}
                title={match.title ? match.title : "no title"}
                teamAName={match.teama.name}
                teamBName={match.teamb.name}
                teamAScores={match.teama.scores}
                teamBScores={match.teamb.scores}
                teamAOvers={match.teama.overs}
                teamBOvers={match.teamb.overs}
                matchScoreDetails={match.live ? match.live : "nothing here"}
              />
            );
          })}
          {/* <div>
          </div> */}
          {/* <div>
            <ScoreCard />
          </div>
          <div>
            <ScoreCard />
          </div>
          <div>
            <ScoreCard />
          </div>
          <div>
            <ScoreCard />
          </div>
          <div>
            <ScoreCard />
          </div>
          <div>
            <ScoreCard />
          </div>
          <div>
            <ScoreCard />
          </div> */}
        </Slider>
      </div>
      {/* <div className={styles.scoreCardPanelContainer}>
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
      </div> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(ScoreCardPanel, { ssr: false }));
