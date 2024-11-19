import { useState } from 'react';
import Card from '../features/card/Card';

function CardForm({ initialCardData, onSubmit }) {
  const [cardData, setCardData] = useState(initialCardData || {});

  const handleChange = (event) => {
    const { id, value } = event.target;

    setCardData({
      ...cardData,
      // [id]: id === 'cardHolder' ? value.toUpperCase() : value,
      [id]:
        id === 'cardNumber'
          ? value
              .replace(/\D/g, '')
              // .slice(0, 16)
              .replace(/(.{4})/g, '$1 ')
              .trim()
          : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(cardData);
  };

  return (
    <>
      {/* Preview of card */}
      <Card
        cardHolder={cardData?.cardHolder.toUpperCase() || 'FIRSTNAME LASTNAME'}
        vendor={cardData?.vendor || 'Choose'}
        cardNumber={cardData?.cardNumber || '**** **** **** ****'}
        validThruMonth={
          cardData?.validThruMonth
            ? cardData.validThruMonth.toString().padStart(2, '0')
            : 'MM'
        }
        validThruYear={cardData?.validThruYear || 'YY'}
      />
      <div className='formDiv'>
        <form onSubmit={handleSubmit}>
          <p>
            Vendor:
            <br />
            <select id='vendor' onChange={handleChange} required>
              <option defaultValue='Choose'>Choose a vendor</option>
              <option>Gorigori</option>
              <option>Kopachromia</option>
              <option>Flow</option>
            </select>
          </p>
          <p>
            Card Number:
            <br />
            <input
              id='cardNumber'
              type='text'
              maxLength='19'
              value={cardData.cardNumber}
              onChange={handleChange}
              required
            ></input>
          </p>
          <p>
            Valid Thru:
            <br />
            <input
              type='number'
              id='validThruMonth'
              defaultValue={cardData?.validThruMonth || ''}
              min='01'
              max='12'
              onChange={handleChange}
              required
            ></input>{' '}
            /{' '}
            <input
              type='number'
              id='validThruYear'
              defaultValue={
                cardData.validThruYear ? cardData.validThruYear : 'YY'
              }
              min='24'
              onChange={handleChange}
              required
            ></input>
          </p>
          <p>
            Name:
            <br />
            <input
              id='cardHolder'
              type='text'
              value={
                cardData?.cardHolder ? cardData.cardHolder.toUpperCase() : ''
              }
              onChange={handleChange}
              required
            ></input>
          </p>
          <p>
            CCV:
            <br />
            <input
              id='ccv'
              type='number'
              defaultValue={cardData.ccv ? cardData.ccv : ''}
              onChange={handleChange}
              required
            ></input>
          </p>
          <button type='submit'>
            {location.pathname === '/addcard' ? 'Add card' : 'Save'}
          </button>
        </form>
      </div>
    </>
  );
}

export default CardForm;
