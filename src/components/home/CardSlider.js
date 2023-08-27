"use client";
import React, { useRef, useState } from "react";
import ScoreCard from "../common/ScoreCard";
import Image from "next/image";
import styles from "./CardSlider.module.css";

const CardSlider = ({ cards }) => {
  const sliderRef = useRef(null);
  const cardRef = useRef(null);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleNext = () => {
    if (sliderRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 5; // 5 is the marginRight value
      const nextScroll = currentScroll + cardWidth;
      sliderRef.current.scrollTo({
        left: nextScroll,
        behavior: "smooth",
      });
      setCurrentScroll(nextScroll);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 5; // 5 is the marginRight value
      const prevScroll = currentScroll - cardWidth;
      sliderRef.current.scrollTo({
        left: prevScroll,
        behavior: "smooth",
      });
      setCurrentScroll(prevScroll);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPos(e.pageX);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = x - startPos;

    // Apply a ratio for smoother dragging experience
    const newScrollPosition = scrollLeft - walk * 0.75;

    sliderRef.current.scrollLeft = newScrollPosition;
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card, index) => (
          <div key={index} className="card" ref={index === 0 ? cardRef : null}>
            <ScoreCard
              key={index}
              matchID={card?.match_id}
              title={card?.short_title ? card?.short_title : "no title"}
              teamAName={card?.teama.name ? card?.teama.name : "-"}
              teamBName={card?.teamb.name}
              teamAScores={card?.teama.scores}
              teamBScores={card?.teamb.scores}
              teamAOvers={card?.teama.overs}
              teamBOvers={card?.teamb.overs}
              teamALogo={card?.teama.logo_url}
              teamBLogo={card?.teamb.logo_url}
              matchScoreDetails={
                card?.status_note ? card?.status_note : "match yet to start"
              }
              status={card?.status}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          gap: "1rem",
          marginTop: "1rem",
        }}
        className="btns"
      >
        <button className={styles.btn} onClick={handleNext}>
          <Image
            src="/gaurav/arrow-right-c.svg"
            width={10}
            height={10}
            alt="arrow-right"
            quality={20}
            priority
          />
        </button>
        <button className={styles.btn} onClick={handlePrev}>
          <Image
            src="/gaurav/arrow-left-c.svg"
            width={10}
            height={10}
            alt="arrow-left"
            quality={20}
            priority
          />
        </button>
      </div>

      <style jsx>{`
        .slider-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .slider::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
        .slider {
          scrollbar-width: none; /* Firefox */
        }
        .slider {
          -ms-overflow-style: none; /* IE and Edge */
        }

        .slider {
          display: flex;
          width: 100%;
          //   height: 130px;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          cursor: grab;
          scroll-behavior: smooth;
          transition: scrollLeft 0.25s ease;
        }

        .slider:active {
          cursor: grabbing;
        }

        .card {
          flex: 0 0 auto;
          width: auto;
          height: auto;
        //   border: 1px solid #e1e1e1;
          margin-right: 5px;
          scroll-snap-align: start;
        //   background-color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        //   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .slider-container {
            width: 100%;
          }

          .card {
            width: calc(100% - 20px);
          }
        }
      `}</style>
    </div>
  );
};

export default CardSlider;
