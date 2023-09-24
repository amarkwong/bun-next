"use client";
import React, { useState } from "react";
import Card from "./Card";

interface CardProps {
  emoji: string;
  image: string;
  name: string;
}

interface CarouselProps {
  cards: CardProps[];
}

const Carousel: React.FC<CarouselProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // return (
  //   <div className="relative w-full h-80 overflow-hidden">
  //     <button
  //       onClick={handlePrev}
  //       className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
  //     >
  //       {`<`}
  //     </button>
  //     <div className="w-full h-full flex justify-center items-center">
  //       {cards.map((card, index) => {
  //         let style = {};
  //         if (index === currentIndex - 1) {
  //           style = {
  //             transform: "scaleX(0.8) translateX(-50px) rotateY(30deg)",
  //             opacity: 0.6,
  //             clipPath: "polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)",
  //             transition: "transform 0.2s, opacity 0.5s", // Add this line
  //           };
  //         } else if (index === currentIndex) {
  //           style = {
  //             transform: "scale(1)",
  //             opacity: 1,
  //             transition: "transform 0.2s, opacity 0.5s", // Add this line };
  //           };
  //         } else if (index === currentIndex + 1) {
  //           style = {
  //             transform: "scaleX(0.8) translateX(50px) rotateY(-30deg)",
  //             opacity: 0.6,
  //             clipPath: "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)",
  //             transition: "transform 0.2s, opacity 0.5s", // Add this line
  //           };
  //         } else {
  //           style = { display: "none" }; // hide other cards
  //         }
  //         return <Card key={index} {...card} style={style} />;
  //       })}
  //     </  >
  //     <button
  //       onClick={handleNext}
  //       className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
  //     >
  //       {`>`}
  //     </button>
  //   </div>
  // );
 return (
  <>
  <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
    {
  cards.map((card, index) => (
  <div className="carousel-item" key={index}>
  <Card  {...card} />
  </div>
  ))
  }
  </div>
  </>
  )
};

export default Carousel;
