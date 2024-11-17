import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateCard } from '../features/card/cardSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { validateCardData } from '../utils/helper';
import CardForm from '../components/CardForm';

function EditCardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { cardId } = useParams();
  const cards = useSelector((store) => store.cardReducer.cards);

  let cardData = cards.find((card) => card.id == cardId);

  // const [value, setValue] = useState('**** **** **** ****');
  // const [validThruYear, setValidThruYear] = useState();
  // const [validThruMonth, setValidThruMonth] = useState();
  // const [name, setName] = useState();
  // const [vendor, setVendor] = useState();
  // const [ccv, setCcv] = useState();
  // const [cardData, setCardData] = useState(initialCardData);

  const handleUpdateCard = (event) => {
    event.preventDefault();

    const error = validateCardData(cardData);

    if (!error) {
      // Dispatching card
      dispatch(updateCard(cardData));
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
        initialCardData={cardData}

        // value={card.cardNumber}
        // setValue={setValue}
        // name={card.name}
        // setName={setName}
        // vendor={card.vendor}
        // setVendor={setVendor}
        // validThruMonth={card.validThruMonth}
        // setValidThruMonth={setValidThruMonth}
        // validThruYear={card.validThruYear}
        // setValidThruYear={setValidThruYear}
        // handleUpdateCard={handleUpdateCard}
        // updateCcv={updateCcv}
      />
    </main>
  );
}

export default EditCardPage;
