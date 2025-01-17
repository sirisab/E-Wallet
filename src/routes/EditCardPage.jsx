import { useDispatch, useSelector } from 'react-redux';

import { activateCard, updateCard } from '../features/card/cardSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { validateCardData } from '../utils/helper';
import CardForm from '../components/CardForm';
import { deleteCard } from '../features/card/cardSlice';

function EditCardPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { cardId } = useParams();
  const cards = useSelector((store) => store.cardReducer.cards);

  let cardData = cards.find((card) => card.id == cardId);

  const handleDelete = () => {
    if (confirm('Delete card?')) {
      dispatch(deleteCard(cardData.id));
      navigate('/');
    }
  };

  const handleActivate = () => {
    dispatch(activateCard(cardData));
    alert('Card was activated!');
    navigate('/');
  };

  const handleUpdateCard = (editedCard) => {
    const error = validateCardData(editedCard);

    if (!error) {
      // Dispatching card
      dispatch(updateCard(editedCard));
      alert('Card was updated!');
      navigate('/');
    } else {
      alert(`Card could not be updated: ${error}`);
    }
  };

  return (
    <main>
      <div className='edit-card-container'>
        <button id='activateBtn' onClick={handleActivate}>
          Activate Card
        </button>
        <button
          id='deleteBtn'
          onClick={() => {
            handleDelete();
          }}
        >
          Delete Card
        </button>
        <h2>Edit card</h2>
        <CardForm initialCardData={cardData} onSubmit={handleUpdateCard} />
      </div>
    </main>
  );
}

export default EditCardPage;
