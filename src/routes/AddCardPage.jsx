import { useDispatch } from 'react-redux';
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
    isActive: false,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddCard = (newCard) => {
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
      <div className='add-card-div'>
        <h2>New card</h2>

        <CardForm initialCardData={cardData} onSubmit={handleAddCard} />
      </div>
    </main>
  );
}

export default AddCardPage;
