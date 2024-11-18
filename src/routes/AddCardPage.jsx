import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateCardData } from '../utils/helper';
import { addCard } from '../features/card/cardSlice';
import CardForm from '../components/CardForm';

function AddCardPage() {
  const cardData = {
    id: Date.now(),
    vendor: '',
    cardNumber: '',
    validThruMonth: '',
    validThruYear: '',
    cardHolder: '',
    ccv: '',
    active: false,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCard = (newCard) => {
    // event.preventDefault();
    console.log('handleAddCard');
    const error = validateCardData(newCard);

    if (!error) {
      // Dispatching card
      dispatch(addCard(newCard));
      alert('Card was added!');
      navigate('/');
    } else {
      alert(`Card could not be added: ${error}`);
    }
  };

  return (
    <main>
      <h2>New card</h2>

      <CardForm initialCardData={cardData} onSubmit={handleAddCard} />
    </main>
  );
}

export default AddCardPage;
