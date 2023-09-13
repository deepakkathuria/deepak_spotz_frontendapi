"use client";
import React, { useRef, useState } from "react";
import ScoreCard from "../common/ScoreCard";
import Image from "next/image";
import styles from "./CardSlider.module.css";

const CardSlider = ({ cards, displayBtn }) => {
  console.log(cards[0], "cardscardscardscardscardscards");
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
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            ref={index === 0 ? cardRef : null}
          >
            <ScoreCard
              key={index}
              matchID={card?.match_id}
              title={card?.short_title ? card?.short_title : "no title"}
              subtitle={card?.subtitle ? card?.subtitle : null}
              comp_abbr={card?.competition.abbr ? card?.competition.abbr : null}
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

      {displayBtn !== "false" && (
        <div className={styles.btns}>
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
      )}
    </div>
  );
};

export default CardSlider;
