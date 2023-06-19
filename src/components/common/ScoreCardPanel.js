"use client";
import React from "react";
import ScoreCard from "./ScoreCard";
import styles from "../styles/ScoreCardPanel.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ScoreCardPanel = () => {
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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <div
        className={styles.scoreCardMatchTypeSelector}
        style={{ marginBottom: "0.7rem" }}
      >
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
          {/* <div className={styles.bracket}>&#123;</div> */}
          {/* <div className={styles.bracket}>&#123;</div> */}
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
          {/* <div className={styles.bracket}>&#125;</div> */}
        </div>
      </div>
      {/* <div> */}
      <div className={styles.carouselContainer}>
        {/* <h2> Responsive </h2> */}
        <Slider {...settings}>
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
          </div>
          <div>
            <ScoreCard />
          </div>
          <div>
            <ScoreCard />
          </div>
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

export default ScoreCardPanel;
