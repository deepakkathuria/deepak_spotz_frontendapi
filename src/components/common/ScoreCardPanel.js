"use client";
import React from "react";
import ScoreCard from "./ScoreCard";
import styles from "../styles/ScoreCardPanel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";
// import required modules
import { Navigation } from "swiper";

const ScoreCardPanel = () => {
  return (
    <>
      <Swiper
        // style={{ width: "100%" }}
        // slidesPerView={4}
        // slidesPerView="auto"
        slidesPerView={1}
        navigation={true}
        // spaceBetween={0}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: -5,
          },
          940: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: -15,
          },
          1224: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
        <SwiperSlide>
          <ScoreCard />
        </SwiperSlide>
      </Swiper>
      {/* <div className={styles.scoreCardPanelContainer}>
        <ScoreCard />
        <ScoreCard />
        <ScoreCard />
      </div> */}
    </>
  );
};

export default ScoreCardPanel;
