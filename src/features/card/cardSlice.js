import { createSlice } from "@reduxjs/toolkit";
import { validateCardData } from "../../utils/helper";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        id: 77,
        bgColor: "Kopachromia",
        cardNumber: "8235 6345 1231 2212",
        validThruMonth: "09",
        validThruYear: "25",
        name: "KLARA BACKSTRÖM",
        brand: "Kopachromia",
        active: true,
      },
      {
        id: 54,
        bgColor: "Flow",
        cardNumber: "4455 6655 3344 2233",
        validThruMonth: "09",
        validThruYear: "25",
        name: "MAJA BACKSTRÖM",
        brand: "Flow",
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
