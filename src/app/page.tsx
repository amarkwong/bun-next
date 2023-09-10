import Image from "next/image";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

export default function Home() {
  const cards = [
    {
      emoji: "🦁👑",
      name: "Lion King",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    },
    {
      emoji: "🧙🏻‍♂️🪄",
      name: "Harry Potter",
      image:
        "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      emoji: "🧟‍♂️🧟‍♀️",
      name: "Walking Dead",
      image: "https://m.media-amazon.com/images/M/MV5BZmU5NTcwNjktODIwMi00ZmZkLTk4ZWUtYzVjZWQ5ZTZjN2RlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    }
  ];

  return (
    <>
      <Carousel cards={cards} />
    </>
  );
}
