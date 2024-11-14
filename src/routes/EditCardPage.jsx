import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Card from '../features/card/Card';
import { addCard, updateCard } from '../features/card/cardSlice';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { validateCardData } from '../utils/helper';
import CardForm from '../components/CardForm';

function EditCardPage() {
  const [value, setValue] = useState('**** **** **** ****');
  const [validThruYear, setValidThruYear] = useState();
  const [validThruMonth, setValidThruMonth] = useState();
  const [name, setName] = useState();
  const [vendor, setVendor] = useState();
  const [ccv, setCcv] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { cardId } = useParams();
  const cards = useSelector((store) => store.cardReducer.cards);

  let card = cards.find((card) => card.id == cardId);
  console.log(card);

  const updateCcv = () => {
    setCcv(value);
  };

  const handleUpdateCard = (event) => {
    event.preventDefault();

    const dataBeingSent = {
      id: Date.now(),
      bgColor: vendor,
      cardNumber: value,
      validThruMonth: validThruMonth.toString().padStart(2, '0'),
      validThruYear: validThruYear,
      name: name.toUpperCase(),
      vendor,
      active: false,
      ccv,
    };

    const error = validateCardData(dataBeingSent);

    if (!error) {
      // Dispatching card
      dispatch(updateCard(dataBeingSent));
      alert('Card was updated!');
      navigate('/');
    } else {
      alert(`Card could not be updated: ${error}`);
    }
  };

  return (
    <main>
      <h2>Edit card</h2>
      <CardForm
        value={card.cardNumber}
        setValue={setValue}
        name={card.name}
        setName={setName}
        vendor={card.vendor}
        setVendor={setVendor}
        validThruMonth={card.validThruMonth}
        setValidThruMonth={setValidThruMonth}
        validThruYear={card.validThruYear}
        setValidThruYear={setValidThruYear}
        handleUpdateCard={handleUpdateCard}
        updateCcv={updateCcv}
      />
    </main>
  );
}

export default EditCardPage;
