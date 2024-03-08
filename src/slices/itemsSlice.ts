import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { PRICE_LIST, PriceList } from "../lib/priceList";
import { ItemList } from "../lib/types";

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
  selectedItem: ItemList;
  enemySelectedItem: ItemList;
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
  selectedItem: "null",
  enemySelectedItem: "null",
};

type ItemPayload = {
  itemName: keyof PriceList;
};

type SelectedItemPayload = {
  itemName: ItemList;
};

export const itemsSlice = createSlice({
  name: "items",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    buyItem: (state, { payload }: PayloadAction<ItemPayload>) => {
      const { itemName } = payload;
      state.items[itemName]++;
      state.money -= PRICE_LIST[itemName];
    },
    returnItem: (state, { payload }: PayloadAction<ItemPayload>) => {
      const { itemName } = payload;
      state.items[itemName]--;
      state.money += PRICE_LIST[itemName];
    },
    useItem: (state, { payload }: PayloadAction<SelectedItemPayload>) => {
      const { itemName } = payload;
      state.selectedItem = itemName;
      if (itemName !== "null") {
        state.items[itemName]--;
      }
    },
    enemyUseItem: (state, { payload }: PayloadAction<SelectedItemPayload>) => {
      const { itemName } = payload;
      state.enemySelectedItem = itemName;
    },
    useItemReset: (state) => {
      state.selectedItem = "null";
      state.enemySelectedItem = "null";
    },
    useSkill: (state, { payload }: PayloadAction<number>) => {
      state.money -= payload;
    },
  },
});

export const {
  buyItem,
  returnItem,
  useItem,
  enemyUseItem,
  useItemReset,
  useSkill,
} = itemsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMoney = (state: RootState) => state.items.money;

export default itemsSlice.reducer;
