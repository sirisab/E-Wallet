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

  return (
    <>
      <h2>New card</h2>
      {/* Preview of card */}
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
      />
      <form>
        <p>
          Card Number:
          <input
            type="text"
            onChange={(event) => {
              setCardNumber(event.target.value);
            }}
          ></input>
        </p>
        <p>
          Valid Thru:
          <input
            type="text"
            onChange={(event) => {
              setValidThruYear(event.target.value);
            }}
          ></input>
          <input
            type="text"
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
    </>
  );
}

export default AddCardPage;
