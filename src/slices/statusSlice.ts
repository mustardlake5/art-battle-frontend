import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";

// Define a type for the slice state
type StatusState = {
  fighting: boolean;
  money: number;
  count: {
    win: number;
    lose: number;
  };
};

// Define the initial state using that type
const initialState: StatusState = {
  fighting: false,
  money: 0,
  count: {
    win: 0,
    lose: 0,
  },
};

export const statusSlice = createSlice({
  name: "status",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    buyItem: (state, { payload }: PayloadAction<number>) => {
      state.money -= payload;
    },
    useSkill: (state, { payload }: PayloadAction<number>) => {
      state.money -= payload;
    },
  },
});

export const { buyItem, useSkill } = statusSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMoney = (state: RootState) => state.status.money;

export default statusSlice.reducer;
