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

  const handleUpdateCard = (cardData) => {
    // event.preventDefault();

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
      <CardForm initialCardData={cardData} onSubmit={handleUpdateCard} />
    </main>
  );
}

export default EditCardPage;
