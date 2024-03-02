import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { PRICE_LIST, PriceList } from "../lib/priceList";

// Define a type for the slice state
type ItemsState = {
  money: number;
  items: {
    fakePot: number;
    fakeSculpture: number;
    fakePainting: number;
    pot: number;
    sculpture: number;
    painting: number;
  };
};

// Define the initial state using that type
const initialState: ItemsState = {
  money: 2000,
  items: {
    fakePot: 0,
    fakeSculpture: 0,
    fakePainting: 0,
    pot: 0,
    sculpture: 0,
    painting: 0,
  },
};

type BuyItemPayload = {
  itemName: keyof PriceList;
  number: number;
};

export const itemsSlice = createSlice({
  name: "items",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    buyItem: (state, { payload }: PayloadAction<BuyItemPayload>) => {
      const { itemName, number } = payload;
      state.money -= PRICE_LIST[itemName] * number;
    },
    useSkill: (state, { payload }: PayloadAction<number>) => {
      state.money -= payload;
    },
  },
});

export const { buyItem, useSkill } = itemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMoney = (state: RootState) => state.items.money;

export default itemsSlice.reducer;