import { createSlice } from '@reduxjs/toolkit';
import { validateCardData } from '../../utils/helper';

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [
      {
        id: 77,
        bgColor: 'Kopachromia',
        cardNumber: '8235 6345 1231 2212',
        validThruMonth: '09',
        validThruYear: '25',
        cardHolder: 'KLARA BACKSTRÖM',
        vendor: 'Kopachromia',
        active: true,
        ccv: 123,
      },
      {
        id: 54,
        bgColor: 'Flow',
        cardNumber: '4455 6655 3344 2233',
        validThruMonth: '10',
        validThruYear: '26',
        cardHolder: 'MAJA BACKSTRÖM',
        vendor: 'Flow',
        active: false,
        ccv: 234,
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    deleteCard: (state, action) => {
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    },
    updateCard: (state, action) => {
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.id ? action.payload : card
        ),
      };
    },
    activateCard: (state, action) => {
      return {
        ...state,
        cards: state.cards.map((card) => {
          return card.id === action.payload.id
            ? { ...card, active: true }
            : { ...card, active: false };
        }),
      };
    },
  },
});

export default cardSlice.reducer;

export const { activateCard, addCard, deleteCard, updateCard } =
  cardSlice.actions;
