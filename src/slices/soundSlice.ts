import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
type SoundState = {
  mute: boolean;
  volume: number;
};

// Define the initial state using that type
const initialState: SoundState = {
  mute: true,
  volume: 1.0,
};

export const soundSlice = createSlice({
  name: "sound",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleMute: (state) => {
      state.mute = !state.mute;
    },
    changeVolume: (state, { payload }: PayloadAction<number>) => {
      if (payload > 0 && payload <= 1) {
        state.volume = payload;
      }
    },
  },
});

export const { toggleMute, changeVolume } = soundSlice.actions;

export default soundSlice.reducer;
