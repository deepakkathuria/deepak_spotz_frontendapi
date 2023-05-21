"use client";
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const TweetClientSideRender = (props) => {
  return (
    <>
      <TwitterTweetEmbed tweetId={props.tweetId} />
    </>
  );
};

export default TweetClientSideRender;
