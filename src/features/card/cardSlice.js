import { createSlice } from "@reduxjs/toolkit";
import { validateCardData } from "../../utils/helper";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: 54,
        bgColor: "Wolf",
        cardNumber: "4455 6655 3344 2233",
        validThruMonth: "09",
        validThruYear: "25",
        name: "SIRI BACKSTRÖM",
        brand: "Wolf",
        active: true,
      },
      {
        id: 77,
        bgColor: "Chroma",
        cardNumber: "4455 6655 3344 2233",
        validThruMonth: "09",
        validThruYear: "25",
        name: "ISIS BACKSTRÖM",
        brand: "Chroma",
        active: false,
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
  },
});

export default cardSlice.reducer;

export const { addCard, deleteCard } = cardSlice.actions;
