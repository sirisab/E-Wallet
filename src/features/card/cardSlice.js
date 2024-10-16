import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: 54,
        bgColor: "pink",
        cardNumber: "4455 6655 3344 2233",
        validThru: "23/09",
        name: "SIRI BACKSTRÖM",
        brand: "Nordea",
        active: true,
      },
      {
        id: 77,
        bgColor: "blue",
        cardNumber: "4455 6655 3344 2233",
        validThru: "23/12",
        name: "ISIS BACKSTRÖM",
        brand: "Handelsbanken",
        active: false,
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      console.log("state:", state);
      console.log("action.payload", action.payload);
    },
    deleteCard: (state, action) => {
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    },
  },
});

export default cardSlice.reducer;

export const { addCard, deleteCard } = cardSlice.actions;
