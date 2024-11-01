import {
  formatCreditCard,
  getCreditCardType,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
} from "cleave-zen";
import { useRef, useEffect } from "react";
import Card from "../features/card/Card";

const CardForm = ({
  handleAddCard,
  value,
  setValue,
  type,
  setType,
  validThruYear,
  setValidThruYear,
  validThruMonth,
  setValidThruMonth,
  name,
  setName,
  brand,
  setBrand,
  ccv,
  setCcv,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    // registerCursorTracker itself returns an unregister destructor
    // function so you can place it here for hook component unmount
    return registerCursorTracker({
      input: inputRef.current,
      delimiter: DefaultCreditCardDelimiter,
    });
  }, []);

  return (
    <>
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
              <option defaultValue="Choose">Choose a brand</option>
              <option>Gori</option>
              <option>Kopachromia</option>
              <option>Flow</option>
            </select>
          </p>
          <p>
            Card Number:
            <br />
            <input
              ref={inputRef}
              defaultValue={value}
              onChange={(event) => {
                setValue(formatCreditCard(event.target.value));
                setType(getCreditCardType(event.target.value));
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
              defaultValue={validThruMonth}
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
              defaultValue={validThruYear ? validThruYear : "YY"}
              min="24"
              onChange={(event) => {
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
              defaultValue={name ? name : ""}
              onChange={(event) => {
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
              defaultValue={ccv}
              onChange={(event) => {
                setCcv(event.target.value);
              }}
              required
            ></input>
          </p>

          <button type="submit">
            {location.pathname === "/addcard" ? "Add card" : "Save"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CardForm;
