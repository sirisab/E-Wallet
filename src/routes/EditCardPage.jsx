import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "../features/card/Card";
import { addCard } from "../features/card/cardSlice";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { validateCardData } from "../utils/helper";
import CardForm from "../components/CardForm";

function EditCardPage() {
  const [value, setValue] = useState("**** **** **** ****");
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
      <CardForm
        cardNumber={card.value}
        setValue={card.setValue}
        name={card.name}
        brand={card.brand}
        validThruMonth={card.validThruMonth}
        validThruYear={card.validThruYear}
      />
    </main>
  );
}

export default EditCardPage;
