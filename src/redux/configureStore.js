import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/card/cardSlice";

const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
});

export default store;
