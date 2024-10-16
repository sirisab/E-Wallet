import Card from "../features/card/Card";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteCard } from "../features/card/cardSlice";
import EditCardPage from "./EditCardPage";

function Startpage() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const cards = useSelector((store) => store.cardReducer.cards);
  return (
    <div className="startPage">
      <h2>Active card</h2>
      {cards
        .filter((card) => card.active)
        .map((card, i) => (
          <div className="cardBtnContainer" key={i}>
            <Card
              key={i}
              bgColor={card.bgColor}
              cardNumber={card.cardNumber}
              validThru={card.validThru}
              name={card.name}
              brand={card.brand}
              active={card.active}
            />
            <button
              className="deleteCardBtn hidden"
              onClick={() => {
                dispatch(deleteCard(card.id));
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      <h2>Unactive cards</h2>
      {cards
        .filter((card) => !card.active)
        .map((card, i) => (
          <div className="cardBtnContainer" key={i}>
            <Link to={`/card/${card.id}`} data={card}>
              <Card
                bgColor={card.bgColor}
                cardNumber={card.cardNumber}
                validThru={card.validThru}
                name={card.name}
                brand={card.brand}
                active={card.active}
              />
            </Link>
            <button
              className="deleteCardBtn"
              onClick={() => {
                dispatch(deleteCard(card.id));
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      {/* <Link to="/addcard" cards={cards}>
        <div className="addCardLink">Add new Card</div>
      </Link> */}
      <button
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
    </div>
  );
}

export default Startpage;
