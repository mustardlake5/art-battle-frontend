import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Phase {
  INITIAL,
  SEARCH_ENEMY,
  PURCHASE,
  BATTLE,
  RESULT,
}

// Define a type for the slice state
type StatusState = {
  fighting: boolean;
  count: {
    win: number;
    lose: number;
  };
  phase: Phase;
};

// Define the initial state using that type
const initialState: StatusState = {
  fighting: false,
  count: {
    win: 0,
    lose: 0,
  },
  phase: Phase.INITIAL,
};

export const statusSlice = createSlice({
  name: "status",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    nextPhase: (state) => {
      const { INITIAL, SEARCH_ENEMY, PURCHASE, BATTLE, RESULT } = Phase;
      switch (state.phase) {
        case INITIAL:
          state.phase = SEARCH_ENEMY;
          break;
        case SEARCH_ENEMY:
          state.phase = PURCHASE;
          break;
        case PURCHASE:
          state.phase = BATTLE;
          break;
        case BATTLE:
          state.phase = RESULT;
          break;
        case RESULT:
          state.phase = INITIAL;
          break;
        default:
          state.phase = INITIAL;
          break;
      }
    },
    jumpPhase: (state, { payload }: PayloadAction<Phase>) => {
      state.phase = payload;
    },
  },
});

export const { nextPhase, jumpPhase } = statusSlice.actions;

export default statusSlice.reducer;
