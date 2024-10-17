import { useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../features/card/Card";
import { addCard } from "../features/card/cardSlice";
import { useNavigate } from "react-router-dom";
import { validateCardData } from "../utils/helper";

function AddCardPage() {
  const [cardNumber, setCardNumber] = useState();
  const [validThruYear, setValidThruYear] = useState();
  const [validThruMonth, setValidThruMonth] = useState();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCard = () => {
    const dataBeingSent = {
      bgColor: brand,
      id: Date.now(),
      cardNumber,
      validThru: `${validThruYear} / ${validThruMonth
        .toString()
        .padStart(2, "0")}`,
      name: name.toUpperCase(),
      brand,
      active: false,
    };

    const error = validateCardData(dataBeingSent);

    if (!error) {
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
      alert("Card was added!");
      navigate("/");
    } else {
      alert(`Card could not be added: ${error}`);
    }
  };

  return (
    <>
      <h2>New card</h2>
      {/* Preview of card */}
      <Card
        bgColor={brand}
        name={name?.toUpperCase()}
        brand={brand}
        cardNumber={cardNumber}
        validThru={
          validThruYear && validThruMonth
            ? `${validThruYear} / ${validThruMonth.toString().padStart(2, "0")}`
            : ""
        }
      />
      <form>
        <p>
          Card Number:
          <input
            type="number"
            onChange={(event) => {
              setCardNumber(event.target.value);
            }}
          ></input>
        </p>
        <p>
          Valid Thru:
          <input
            type="number"
            onChange={(event) => {
              setValidThruYear(event.target.value);
            }}
          ></input>
          <input
            type="number"
            onChange={(event) => {
              setValidThruMonth(event.target.value);
            }}
          ></input>
        </p>
        <p>
          Name:
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </p>
        <p>
          Brand:
          <select
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          >
            <option>Choose a brand</option>
            <option>Nordea</option>
            <option>Handelsbanken</option>
            <option>SEB</option>
          </select>
        </p>

        {/* Dispatching new card */}
        <button
          type="button"
          onClick={() => {
            handleAddCard();
          }}
        >
          Add card
        </button>
      </form>
    </>
  );
}

export default AddCardPage;
