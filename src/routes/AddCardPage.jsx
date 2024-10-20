import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import Card from "../features/card/Card";
import { addCard } from "../features/card/cardSlice";
import { useNavigate } from "react-router-dom";
import { validateCardData } from "../utils/helper";
import { formatCreditCard, getCreditCardType } from "cleave-zen";

function AddCardPage() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const [cardNumber, setCardNumber] = useState();
  const [validThruYear, setValidThruYear] = useState();
  const [validThruMonth, setValidThruMonth] = useState();
  const [validThru, setValidThru] = useState();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [ccv, setCcv] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCard = (event) => {
    event.preventDefault();
    const dataBeingSent = {
      bgColor: brand,
      id: Date.now(),
      cardNumber: value,
      validThru: {
        month: validThruMonth.toString().padStart(2, "0"),
        year: validThruYear,
      },
      name: name.toUpperCase(),
      brand,
      active: false,
    };

    const error = validateCardData(dataBeingSent);

    if (!error) {
      // Dispatching card
      dispatch(addCard(dataBeingSent));
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
        cardNumber={value}
        validThru={
          validThruYear && validThruMonth
            ? `${validThruMonth.toString().padStart(2, "0")} / ${validThruYear}`
            : ""
        }
        // validThru={
        //   validThruYear && validThruMonth
        //     ? `${validThruMonth.toString().padStart(2, "0")} / ${validThruYear}`
        //     : ""
        // }
      />
      <div className="formDiv">
        <form onSubmit={handleAddCard}>
          <p>Brand:</p>
          <p>
            <select
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              required
            >
              <option value="">Choose a brand</option>
              <option>Igor</option>
              <option>Chroma</option>
              <option>Wolf</option>
            </select>
          </p>
          <p>Card Number:</p>
          <p>
            <input
              ref={inputRef}
              value={value}
              onChange={(event) => {
                const value = event.target.value;
                setValue(formatCreditCard(value));
                setType(getCreditCardType(value));
              }}
              required
            ></input>
          </p>
          <p>Valid Thru:</p>
          <p>
            <input
              type="number"
              id="month"
              placeholder="MM"
              min="01"
              max="12"
              onChange={(event) => {
                setValidThruMonth(event.target.value);
              }}
              required
            ></input>{" "}
            /{" "}
            <input
              type="number"
              id="year"
              placeholder="YY"
              min="24"
              onChange={(event) => {
                setValidThruYear(event.target.value);
              }}
              required
            ></input>
          </p>
          <p>Name:</p>
          <p>
            <input
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            ></input>
          </p>
          <p>CCV:</p>
          <p>
            <input
              type="number"
              onChange={(event) => {
                setCcv(event.target.value);
              }}
              required
            ></input>
          </p>

          <button type="submit">Add card</button>
        </form>
      </div>
    </>
  );
}

export default AddCardPage;
