import Card from '../features/card/Card';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash, FaRegCreditCard } from 'react-icons/fa';

import { deleteCard } from '../features/card/cardSlice';

function Startpage() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  const cards = useSelector((store) => store.cardReducer.cards);
  console.log(cards);
  return (
    <main>
      {cards ? <h3>Active card</h3> : 'No cards registered!'}
      {cards
        .filter((card) => card.active)
        .map((card, i) => (
          <div className='cardBtnContainer' key={i}>
            <Card {...card} className='active' />
            <button type='button' className='deleteCardBtn hidden'>
              <FaTrash />
            </button>
          </div>
        ))}
      {cards.length === 2 ? <h3>Inactive card</h3> : ''}
      {cards.length > 2 ? <h3>Inactive cards</h3> : ''}
      {cards
        .filter((card) => !card.active)
        .map((card, i) => (
          <div className='cardBtnContainer' key={i}>
            <Link to={`/card/${card.id}`}>
              <Card {...card} />
            </Link>
            <button
              type='button'
              className='deleteCardBtn'
              onClick={() => {
                dispatch(deleteCard(card.id));
              }}
            >
              <FaTrash size='16px' />
            </button>
          </div>
        ))}
      <div className='buttonDiv'>
        <button
          onClick={() => {
            if (cards.length === 4) {
              alert('You can only have 4 cards registered. Delete a card!');
            } else {
              navigate('/addcard');
            }
          }}
        >
          Add new card
        </button>
      </div>
    </main>
  );
}

export default Startpage;
