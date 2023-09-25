import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ItemCard from "./ItemCard";

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
  return (
    <div>
      <ItemCard card={card}></ItemCard>
    </div>
  );
};

export default Card;
