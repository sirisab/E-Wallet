import { useDispatch } from "react-redux";
import { useRef, useState, useEffect } from "react";
import Card from "../features/card/Card";
import { addCard } from "../features/card/cardSlice";
import { useNavigate } from "react-router-dom";
import { validateCardData } from "../utils/helper";
import {
  DefaultCreditCardDelimiter,
  formatCreditCard,
  getCreditCardType,
  registerCursorTracker,
} from "cleave-zen";

function AddCardPage() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("**** **** **** ****");
  const [type, setType] = useState("");
  const [validThruYear, setValidThruYear] = useState("YY");
  const [validThruMonth, setValidThruMonth] = useState("MM");
  const [name, setName] = useState("Firstname Lastname");
  const [brand, setBrand] = useState("Choose");
  const [ccv, setCcv] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // registerCursorTracker itself returns an unregister destructor
    // function so you can place it here for hook component unmount
    return registerCursorTracker({
      input: inputRef.current,
      delimiter: DefaultCreditCardDelimiter,
    });
  }, []);

  const handleAddCard = (event) => {
    event.preventDefault();

    const dataBeingSent = {
      bgColor: brand,
      id: Date.now(),
      cardNumber: value,
      validThruMonth: validThruMonth.toString().padStart(2, "0"),
      validThruYear: validThruYear,
      name: name.toUpperCase(),
      brand,
      active: false,
      ccv,
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
    <main>
      <h2>New card</h2>

      {/* Preview of card */}
      <Card
        bgColor={brand}
        name={name?.toUpperCase()}
        brand={brand}
        cardNumber={value}
        validThruMonth={validThruMonth?.toString().padStart(2, "0")}
        validThruYear={validThruYear}
      />
      <div className="formDiv">
        <form onSubmit={handleAddCard}>
          <p>
            Brand:
            <br />
            <select
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              required
            >
              <option value="Choose">Choose a brand</option>
              <option>Gorigori</option>
              <option>Kopachromia</option>
              <option>Flow</option>
            </select>
          </p>
          <p>
            Card Number:
            <br />
            <input
              ref={inputRef}
              value={value}
              placeholder="**** **** **** ****"
              onChange={(event) => {
                const value = event.target.value;
                setValue(formatCreditCard(value));
                setType(getCreditCardType(value));
              }}
              required
            ></input>
          </p>
          <p>
            Valid Thru:
            <br />
            <input
              type="number"
              id="month"
              placeholder="MM"
              min="01"
              max="12"
              onChange={(event) => {
                console.log(event.target.value);
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
                console.log(event.target.value);
                setValidThruYear(event.target.value);
              }}
              required
            ></input>
          </p>
          <p>
            Name:
            <br />
            <input
              type="text"
              onChange={(event) => {
                console.log(event.target.value);
                setName(event.target.value);
              }}
              required
            ></input>
          </p>
          <p>
            CCV:
            <br />
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
    </main>
  );
}

export default AddCardPage;
