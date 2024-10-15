import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards: [
      {
        cardNumber: "1111 1111 1111 1111",
        validThru: "01/01",
        name: "Siri Testkort 1",
        brand: "ABC",
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

export default cardSlice.reducer;

export const addCard = cardSlice.actions.addCard;
