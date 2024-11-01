import Card from "../features/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteCard } from "../features/card/cardSlice";

function Startpage() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const cards = useSelector((store) => store.cardReducer.cards);
  return (
    <main>
      <h3>Active card</h3>
      {cards
        .filter((card) => card.active)
        .map((card, i) => (
          <div className="cardBtnContainer" key={i}>
            <Card
              bgColor={card.bgColor}
              cardNumber={card.cardNumber}
              validThruMonth={card.validThruMonth}
              validThruYear={card.validThruYear}
              name={card.name}
              brand={card.brand}
              active={card.active}
            />
            <button type="button" className="deleteCardBtn">
              <FaTrash />
            </button>
          </div>
        ))}
      <h3>Unactive cards</h3>
      {cards
        .filter((card) => !card.active)
        .map((card, i) => (
          <div className="cardBtnContainer" key={i}>
            <Link to={`/card/${card.id}`} state={cards}>
              <Card
                bgColor={card.bgColor}
                cardNumber={card.cardNumber}
                validThruMonth={card.validThruMonth}
                validThruYear={card.validThruYear}
                name={card.name}
                brand={card.brand}
                active={card.active}
              />
            </Link>
            <button
              type="button"
              className="deleteCardBtn"
              onClick={() => {
                dispatch(deleteCard(card.id));
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      <button
        className="addNewCardLink"
        type="button"
        onClick={() => {
          if (cards.length === 4) {
            alert("You can only have 4 cards registered. Delete a card!");
          } else {
            navigate("/addcard");
          }
        }}
      >
        Add a card
      </button>
    </main>
  );
}

export default Startpage;
