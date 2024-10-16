import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        bgColor: "pink",
        cardNumber: "4455 6655 3344 2233",
        validThru: "23/09",
        name: "SIRI BACKSTRÖM",
        brand: "Nordea",
        active: true,
      },
      {
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
      window.location.href = "/";
    },
    deleteCard: (state, action) => {
      console.log("state:", state);
      console.log("action.payload", action.payload);
      return {
        ...state,
        cards: state.cards.filter((card, i) => i !== action.payload),
      };
    },
  },
});

export default cardSlice.reducer;

export const { addCard, deleteCard } = cardSlice.actions;
