import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ItemCard from "./ItemCard";
import ErrorPage from "../ErrorPage/ErrorPage";

const Card = () => {
  const [card, setCard] = useState();
  const { id } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    if (cards) {
      const findCard = cards?.find((card) => card.id === id);
      setCard(findCard);
    }
  }, [cards, id]);

  if (!card) {
    return <ErrorPage />;
  }

  return (
    <div className="card rounded-md container py-10 mx-auto px-4 lg:px-32 z-20">
      <ItemCard card={card}></ItemCard>
    </div>
  );
};

export default Card;
