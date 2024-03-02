import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { PRICE_LIST, PriceList } from "../lib/priceList";

// Define a type for the slice state
type CartState = {
  totalAmount: number;
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
const initialState: CartState = {
  totalAmount: 0,
  items: {
    fakePot: 0,
    fakeSculpture: 0,
    fakePainting: 0,
    pot: 0,
    sculpture: 0,
    painting: 0,
  },
};

type ItemPayload = {
  itemName: keyof PriceList;
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    incrementCartItem: (state, { payload }: PayloadAction<ItemPayload>) => {
      const { itemName } = payload;
      state.items[itemName]++;
      state.totalAmount += PRICE_LIST[itemName];
    },
    decrementCartItem: (state, { payload }: PayloadAction<ItemPayload>) => {
      const { itemName } = payload;
      state.items[itemName]--;
      state.totalAmount -= PRICE_LIST[itemName];
    },
    resetCartItem: (state, { payload }: PayloadAction<ItemPayload>) => {
      const { itemName } = payload;
      const minus = PRICE_LIST[itemName] * state.items[itemName];
      state.totalAmount -= minus;
      state.items[itemName] = 0;
    },
    resetCartItems: (state) => {
      state.totalAmount = 0;
      state.items = { ...initialState.items };
    },
  },
});

export const {
  incrementCartItem,
  decrementCartItem,
  resetCartItem,
  resetCartItems,
} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTotalAmount = (state: RootState) => state.cart.totalAmount;

export default cartSlice.reducer;
