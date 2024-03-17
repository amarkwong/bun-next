import Image from "next/image";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Form from "./components/Form";
import { kv } from "@vercel/kv";

export default async function Home() {
  const cards = [
    {
      emoji: "🦁👑",
      name: "Lion King",
      image:
        "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_SX300.jpg",
    },
    {
      emoji: "👽🚲",
      name: "E.T.",
      image:  "https://m.media-amazon.com/images/I/51o0lXaZLTL._AC_.jpg",
    }
  ];


  // const cards = await kv.get<{ id: string; quantity: number }[]>(params.user);

  return (
    <>
      <div className="flex">
      <Carousel cards={cards} />
      <Form />
      </div>
    </>
  );
}
