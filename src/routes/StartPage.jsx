import Card from "../features/card/Card";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { deleteCard } from "../features/card/cardSlice";

function Startpage() {
  let dispatch = useDispatch();
  const cards = useSelector((store) => store.cardReducer.cards);
  return (
    <div className="startPage">
      {cards.map((card, i) => (
        <div key={i}>
          <Card
            bgColor={card.bgColor}
            cardNumber={card.cardNumber}
            validThru={card.validThru}
            name={card.name}
            brand={card.brand}
            active={card.active}
          />
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
      <Link to="/addcard" cards={cards}>
        <div className="addCardLink">Add new Card</div>
      </Link>
    </div>
  );
}

export default Startpage;
