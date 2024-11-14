import {
  formatCreditCard,
  getCreditCardType,
  registerCursorTracker,
  DefaultCreditCardDelimiter,
} from 'cleave-zen';
import { useRef, useEffect } from 'react';
import Card from '../features/card/Card';

const CardForm = ({
  name,
  setName,
  vendor,
  setVendor,
  validThruMonth,
  setValidThruMonth,
  validThruYear,
  setValidThruYear,
  handleUpdateCard,
  value,
  setValue,
  ccv,
  updateCcv,
}) => {
  const inputRef = useRef(null);
  useEffect(() => {
    // registerCursorTracker itself returns an unregister destructor
    // function so you can place it here for hook component unmount
    return registerCursorTracker({
      input: inputRef.current,
      delimiter: DefaultCreditCardDelimiter,
    });
  }, []);

  return (
    <>
      {/* Preview of card */}
      <Card
        bgColor={vendor}
        name={name}
        vendor={vendor}
        cardNumber={value}
        validThruMonth={validThruMonth?.toString().padStart(2, '0')}
        validThruYear={validThruYear}
      />
      <div className='formDiv'>
        <form onSubmit={handleUpdateCard}>
          <p>
            Vendor:
            <br />
            <select
              onChange={(event) => {
                setVendor(event.target.value);
              }}
              required
            >
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
              ref={inputRef}
              value={value}
              onChange={(event) => {
                const value = event.target.value;
                formatCreditCard(value);
                getCreditCardType(value);
              }}
              required
            ></input>
          </p>
          <p>
            Valid Thru:
            <br />
            <input
              type='number'
              id='validThruMonth'
              defaultValue={validThruMonth}
              min='01'
              max='12'
              onChange={(event) => {
                setValidThruMonth(event.target.value);
              }}
              required
            ></input>{' '}
            /{' '}
            <input
              type='number'
              id='validThruYear'
              defaultValue={validThruYear ? validThruYear : 'YY'}
              min='24'
              onChange={(event) => {
                setValidThruYear(event.target.value);
              }}
              required
            ></input>
          </p>
          <p>
            Name:
            <br />
            <input
              type='text'
              defaultValue={name ? name : ''}
              onChange={(event) => {
                setName(event.target.value);
              }}
              required
            ></input>
          </p>
          <p>
            CCV:
            <br />
            <input
              type='number'
              defaultValue={ccv}
              onChange={(event) => {
                updateCcv(event.target.value);
              }}
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
};

export default CardForm;
