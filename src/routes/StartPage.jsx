import Card from "../features/card/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Startpage() {
  const { cards } = useSelector((state) => state.cards);
  console.log(cards);
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
      <Link to="/addcard" cards={cards}>
        Add new card
      </Link>
    </>
  );
}

export default Startpage;
