import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Searchbox from "../../components/Header/Searchbox/Searchbox";
import Card from "../../components/Card/Card";
import { useState } from "react";

const Home = () => {
  const cards = useLoaderData();
  const [search, setSearch] = useState();

  const filteredCards = cards.filter((card) => card.category === search);

  return (
    <div className="">
      <div className="relative z-10">
        <Searchbox setSearch={setSearch}></Searchbox>
      </div>

      <div className="absolute w-full top-24 opacity-25">
        <Banner></Banner>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 m-10 container mx-auto px-6 lg:px-32">
        {filteredCards.length > 0 ? filteredCards.map((card) => <Card key={card.id} card={card}></Card>) : cards.map((card) => <Card key={card.id} card={card}></Card>)}
      </div>
    </div>
  );
};

export default Home;
