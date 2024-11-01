import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "../features/card/Card";
import { addCard } from "../features/card/cardSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { validateCardData } from "../utils/helper";
import CardForm from "../components/CardForm";

function EditCardPage() {
  const [cardNumber, setCardNumber] = useState();
  const [validThruYear, setValidThruYear] = useState();
  const [validThruMonth, setValidThruMonth] = useState();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { cardId } = useParams();
  const cards = useSelector((store) => store.cardReducer.cards);

  let card = cards.find((card) => card.id == cardId);

  return (
    <main>
      <h2>Edit card</h2>
      <CardForm />
      {/* <form>
        <p>
          Card Number:
          <input
            type="text"
            onChange={(event) => {
              setCardNumber(event.target.value);
            }}
            placeholder={card.cardNumber}
          ></input>
        </p>
        <p>
          Valid Thru:
          <input
            type="text"
            onChange={(event) => {
              setValidThruYear(event.target.value);
            }}
            placeholder={card.validThruYear}
          ></input>
          <input
            type="text"
            onChange={(event) => {
              setValidThruMonth(event.target.value);
            }}
            placeholder={card.validThruMonth}
          ></input>
        </p>
        <p>
          Name:
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder={card.name}
          ></input>
        </p>
        <p>
          Brand:
          <select
            onChange={(event) => {
              setBrand(event.target.value);
            }}
            placeholder={card.brand}
          >
            <option>Choose a brand</option>
            <option>Nordea</option>
            <option>Handelsbanken</option>
            <option>SEB</option>
          </select>
        </p>

        // Dispatching new card
       <button
          type="button"
          onClick={() => {
            dispatch(
              addCard({
                bgColor: brand,
                id: Date.now(),
                cardNumber: cardNumber,
                validThru: `${validThruYear} / ${validThruMonth
                  .toString()
                  .padStart(2, "0")}`,
                name: name.toUpperCase(),
                brand: brand,
                active: false,
              })
            );
            navigate("/");
          }}
        >
          Add card
        </button>
      </form>

      // Preview of card
      <Card
        bgColor={"blue"}
        name={name?.toUpperCase()}
        brand={brand}
        cardNumber={cardNumber}
        validThru={
          validThruYear && validThruMonth
            ? `${validThruYear} / ${validThruMonth.toString().padStart(2, "0")}`
            : ""
        }
      />{" "}
      */}
    </main>
  );
}

export default EditCardPage;
