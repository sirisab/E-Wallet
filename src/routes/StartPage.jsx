import { useState } from "react";
import Card from "../features/card/Card";

function Startpage() {
  const [cards, setCards] = useState([
    {
      bgColor: "pink",
      cardNumber: "4455 6655 3344 2233",
      validThru: "23/09",
      name: "SIRI BACKSTRÖM",
      brand: "Nordea",
      active: true,
    },
    {
      bgColor: "blue",
      cardNumber: "4455 6655 3344 2233",
      validThru: "23/12",
      name: "ISIS BACKSTRÖM",
      brand: "Handelsbanken",
      active: false,
    },
  ]);
  return (
    <>
      {cards.map((card, i) => (
        <Card
          key={i}
          bgColor={card.bgColor}
          cardNumber={card.cardNumber}
          validThru={card.validThru}
          name={card.name}
          brand={card.brand}
          active={card.active}
        />
      ))}
      <button>Add new card</button>
    </>
  );
}

export default Startpage;
