import React from "react";
import Carousel from "./Carousel";

const Index = () => {
  const cards = [
    {
      title: "Live Score 1",
      score: "1-1",
      image: "https://picsum.photos/400/200",
    },
    {
      title: "Live Score 2",
      score: "2-2",
      image: "https://picsum.photos/400/200",
    },
    {
      title: "Live Score 3",
      score: "3-3",
      image: "https://picsum.photos/400/200",
    },
  ];

  return (
    <div>
      <Carousel cards={cards} />
    </div>
  );
};

export default Index;
