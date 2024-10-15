import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Card from "../features/card/Card";
import { addCard } from "../features/card/cardSlice";

function AddCardPage(cards) {
  const [cardNumber, setCardNumber] = useState();
  const [validThru, setValidThru] = useState();
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const dispatch = useDispatch();

  let addCard = () => {};

  return (
    <>
      <h1>New card</h1>
      <form
        onSubmit={() => {
          let data = {
            cardNumber,
            validThru,
            name,
            brand,
          };
          dispatch(addCard(data));
        }}
      >
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
              setValidThru(event.target.value);
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
          <input
            type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          ></input>
        </p>
        <button type="submit">Add card</button>
      </form>
      <Card
        bgColor={"blue"}
        name={name}
        brand={brand}
        cardNumber={cardNumber}
        validThru={validThru}
      />
    </>
  );
}

export default AddCardPage;
