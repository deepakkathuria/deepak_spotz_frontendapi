import React from "react";
import styles from "../styles/ScoreCard.module.css";
import slugify from "slugify";

const ScoreCard = (props) => {
  const matchNameUrl = slugify(
    `${props.title}-${props.comp_abbr}${
      props.subtitle ? `-${props.subtitle}` : ""
    }`,
    {
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    }
  );

  return (
    <>
      <div className={styles.scoreCardContainer}>
        <div className={styles.scoreCardInner}>
          <a
            href={`/live-cricket-scores/${matchNameUrl}-${props.matchID}/commentary/`}
          >
            <div className={styles.scoreMain}>
              <div className={styles.matchTitleDiv}>
                <div
                  style={
                    props?.status === 3
                      ? { backgroundColor: "#169a00" }
                      : props?.status === 4
                      ? { backgroundColor: "#f83030" }
                      : props?.status === 1
                      ? { backgroundColor: "#022954" }
                      : {} // Default empty style object if neither condition is met
                  }
                  className={styles.liveIC}
                >
                  {props?.status === 3
                    ? "Live"
                    : props?.status === 1
                    ? "Scheduled"
                    : props?.status === 2
                    ? "Completed"
                    : props?.status === 4
                    ? "Abandoned"
                    : "Scorecard"}
                </div>
                <div className={styles.matchTitle}>
                  <p>{`${props?.subtitle ? props?.subtitle : ""}`}</p>
                  &nbsp;
                  <p>{`${props?.format_str ? props?.format_str : ""}`}</p>
                  {", "}&nbsp;
                  <p>{`${props?.venue ? props?.venue : ""}`}</p>
                </div>
              </div>

              <div className={styles.countryNameScore}>
                <div className={styles.countryNameIC}>
                  <div className={styles.countryName}>
                    {props?.teamAName ? props.teamAName.substring(0, 60) : "-"}
                  </div>
                </div>
                <div className={styles.countryScore}>
                  <div className={styles.countryScoreOver}>
                    ({props?.teamAOvers ? props.teamAOvers : "-"})
                  </div>
                  <div className={styles.countryScoreRuns}>
                    {props?.teamAScores
                      ? props.teamAScores.substring(0, 13)
                      : "-"}
                  </div>
                </div>
              </div>

              <div className={styles.countryNameScore}>
                <div className={styles.countryNameIC}>
                  <div className={styles.countryName}>
                    {props?.teamBName ? props.teamBName.substring(0, 60) : "-"}
                  </div>
                </div>
                <div className={styles.countryScore}>
                  <div className={styles.countryScoreOver}>
                    (
                    {props?.teamBOvers
                      ? props.teamBOvers.substring(0, 13)
                      : "-"}
                    )
                  </div>
                  <div className={styles.countryScoreRuns}>
                    {props?.teamBScores
                      ? props.teamBScores.substring(0, 12)
                      : "-"}
                  </div>
                </div>
              </div>

              <div className={styles.matchScoreDetails}>
                {props?.matchScoreDetails ? (
                  <p>{props.matchScoreDetails.substring(0, 40)}</p>
                ) : (
                  "info not available"
                )}
              </div>
            </div>
          </a>
          <hr className={styles.hRule} />
          <div className={styles.matchCardsButtons}>
            <a href={`/live-cricket-scores/${matchNameUrl}-${props.matchID}/`}>
              <button className={styles.matchCardButton}>Info</button>
            </a>
            <a
              href={`/live-cricket-scores/${matchNameUrl}-${props.matchID}/full-scorecard/`}
            >
              <button className={styles.matchCardButton}>Scorecard</button>
            </a>
            <a
              href={`/live-cricket-scores/${matchNameUrl}-${props.matchID}/teams/`}
            >
              <button className={styles.matchCardButton}>Teams</button>
            </a>
            <a href={`/asia-cup-2023/`}>
              <button className={styles.matchCardButton}>News</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
