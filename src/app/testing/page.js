import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="container marginTop4">
        <h1
          style={{ fontSize: "3rem", marginTop: "6rem", marginBottom: "1rem" }}
        >
          Testing Page Links
        </h1>
        <h2 style={{ color: "red", fontSize: "2rem", marginBottom: "1rem" }}>
          Warning:
        </h2>
        <p style={{ color: "blue", fontSize: "2rem" }}>
          This page is for beta testing purpose and may contain unstable
          components - <span style={{ fontWeight: "bold" }}>Gaurav Tanwar</span>
        </p>

        <ul
          style={{
            fontSize: "2rem",
            marginTop: "5rem",
            textDecoration: "underline",
            lineHeight: "3rem",
          }}
        >
          <Link href={"testing/teams"}>
            <li>Teams</li>
          </Link>

          <Link href={"testing/live-score"}>
            <li>Live Score</li>
          </Link>

          <Link href={"testing/news"}>
            <li>News</li>
          </Link>

          <Link href={"testing/series"}>
            <li>Series</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default page;
