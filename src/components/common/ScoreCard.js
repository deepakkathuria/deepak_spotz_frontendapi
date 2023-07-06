"use client";
import React from "react";
import styles from "../styles/ScoreCard.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";

const ScoreCard = (props) => {
  // console.log(props.live, "propeeee");
  return (
    <>
      <div className={styles.scoreCardContainer}>
        <div className={styles.scoreCardInner}>
          <a href="/matchcenter/cricket/scores/live">
            <div className={styles.scoreMain}>
              <div className={styles.matchTitleDiv}>
                <div className={styles.liveIC}>Live</div>
                <div className={styles.matchTitle}>
                  {props?.title ? props.title : "NA"}
                </div>
              </div>

              <div className={styles.countryNameScore}>
                <div className={styles.countryNameIC}>
                  <div className="countryIC">
                    <Image
                      src={
                        props?.teamALogo
                          ? props.teamALogo
                          : "/gaurav/flag.svg"
                      }
                      alt="country name"
                      width={18}
                      height={12}
                      priority
                    />
                  </div>
                  <div className={styles.countryName}>
                    {props?.teamAName ? props.teamAName : "NA"}
                  </div>
                </div>
                <div className={styles.countryScore}>
                  <div className={styles.countryScoreOver}>
                    ({props?.teamAOvers ? props.teamAOvers : "NA"})
                  </div>
                  <div className={styles.countryScoreRuns}>
                    {props?.teamAScores ? props.teamAScores : "NA"}
                  </div>
                </div>
              </div>

              <div className={styles.countryNameScore}>
                <div className={styles.countryNameIC}>
                  <div className="countryIC">
                    <Image
                      src={
                        props?.teamBLogo
                          ? props.teamBLogo
                          : "/gaurav/flag.svg"
                      }
                      alt="country name"
                      width={18}
                      height={12}
                      priority
                    />
                  </div>
                  <div className={styles.countryName}>
                    {props?.teamBName ? props.teamBName : "NA"}
                  </div>
                </div>
                <div className={styles.countryScore}>
                  <div className={styles.countryScoreOver}>
                    ({props?.teamBOvers ? props.teamBOvers : "NA"})
                  </div>
                  <div className={styles.countryScoreRuns}>
                    {props?.teamBScores ? props.teamBScores : "NA"}
                  </div>
                </div>
              </div>

              <div className={styles.matchScoreDetails}>
                {/* <p>India needs 12 runs to win</p> */}
                {props?.matchScoreDetails ? (
                  <p>{props.matchScoreDetails.substring(0, 60)}</p>
                ) : (
                  "info not available"
                )}
              </div>
            </div>
          </a>
          <hr />
          <div className={styles.matchCardsButtons}>
            <button className={styles.matchCardButton}>
              <div className={styles.matchCardButtonIc}>
                <Image
                  src="/gaurav/fantasy-games.svg"
                  width={13}
                  height={13}
                  alt="arrow-left"
                />
              </div>
              Fantasy Team
            </button>
            <button className={styles.matchCardButton}>
              <div className={styles.matchCardButtonIc}>
                <Image
                  src="/gaurav/bet-casino.svg"
                  width={13}
                  height={13}
                  alt="arrow-left"
                />
              </div>
              Place a bet
            </button>
            <button className={styles.matchCardButton}>
              <div className={styles.matchCardButtonIc}>
                <Image
                  src="/gaurav/ticket-voucher.svg"
                  width={13}
                  height={13}
                  alt="arrow-left"
                />
              </div>
              Buy Ticket
            </button>
            <button className={styles.matchCardButton}>
              <div className={styles.matchCardButtonIc}>
                <Image
                  src="/gaurav/news-publishing.svg"
                  width={13}
                  height={13}
                  alt="arrow-left"
                />
              </div>
              News
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// export default ScoreCard;
export default dynamic(() => Promise.resolve(ScoreCard, { ssr: false }));
