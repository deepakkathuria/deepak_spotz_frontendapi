"use client"
import React from "react";
import styles from "../styles/ScoreCard.module.css";
import Image from "next/image";

const ScoreCard = () => {
  return (
    <>
      <div className={styles.scoreCardContainer}>
        <div className={styles.scoreCardInner}>
          <div className={styles.matchTitleDiv}>
            <div className={styles.liveIC}>Live</div>
            <div className={styles.matchTitle}>
              India vs Australia Test match 2023
            </div>
          </div>

          <div className={styles.countryNameScore}>
            <div className={styles.countryNameIC}>
              <div className="countryIC">
                <Image
                  src="https://thumbs.dreamstime.com/b/india-paper-flag-patriotic-background-national-138241478.jpg"
                  alt="country name"
                  width={18}
                  height={12}
                  priority
                />
              </div>
              <div className={styles.countryName}>India</div>
            </div>
            <div className={styles.countryScore}>
              <div className={styles.countryScoreOver}>(18.8)</div>
              <div className={styles.countryScoreRuns}>220</div>
            </div>
          </div>

          <div className={styles.countryNameScore}>
            <div className={styles.countryNameIC}>
              <div className="countryIC">
                <Image
                  src="https://thumbs.dreamstime.com/b/india-paper-flag-patriotic-background-national-138241478.jpg"
                  alt="country name"
                  width={18}
                  height={12}
                  priority
                />
              </div>
              <div className={styles.countryName}>Sri Lanka</div>
            </div>
            <div className={styles.countryScore}>
              <div className={styles.countryScoreOver}>(18.8)</div>
              <div className={styles.countryScoreRuns}>220</div>
            </div>
          </div>

          <div className={styles.matchScoreDetails}>
            <p>India needs 12 runs to win</p>
          </div>
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

export default ScoreCard;
