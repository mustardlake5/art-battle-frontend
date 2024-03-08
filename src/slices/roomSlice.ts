import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RoomState } from "../lib/types";

const initialState: RoomState = {
  roomId: null,
  roomName: null,
  matching: false,
  matchNum: 5,
  prepareForBattleDone: false,
  matchRecord: {
    win: 0,
    lose: 0,
    draw: 0,
  },
  ownProperty: {
    socketId: null,
    userName: null,
    purchaseDone: false,
    artSelectDone: false,
  },
  enemyProperty: {
    socketId: null,
    userName: null,
    purchaseDone: false,
    artSelectDone: false,
  },
  battleResult: null,
};

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    setOwnProperty: (state, { payload }: PayloadAction<RoomState>) => {
      state.roomName = payload.roomName;
      state.ownProperty.socketId = payload.ownProperty.socketId;
      state.ownProperty.userName = payload.ownProperty.userName;
    },
    setEnemyProperty: (state, { payload }: PayloadAction<RoomState>) => {
      state.matching = payload.matching;
      state.enemyProperty.socketId = payload.enemyProperty.socketId;
      state.enemyProperty.userName = payload.enemyProperty.userName;
    },
    setPurchaseDone: (state) => {
      state.ownProperty.purchaseDone = true;
    },
    setEnemyPurchaseDone: (state) => {
      state.enemyProperty.purchaseDone = true;
    },
    setArtSelectDone: (state, { payload }: PayloadAction<boolean>) => {
      state.ownProperty.artSelectDone = payload;
    },
    setEnemyArtSelectDone: (state, { payload }: PayloadAction<boolean>) => {
      state.enemyProperty.artSelectDone = payload;
    },
    setRoom: (state, { payload }: PayloadAction<RoomState>) => {
      const {
        roomIndex,
        roomId,
        roomName,
        matching,
        ownProperty,
        enemyProperty,
      } = payload;
      state.roomIndex = roomIndex;
      state.roomId = roomId;
      state.roomName = roomName;
      state.matching = matching;
      state.ownProperty.userType = ownProperty.userType;
      state.ownProperty.socketId = ownProperty.socketId;
      state.ownProperty.userName = ownProperty.userName;
      state.enemyProperty.userType = enemyProperty.userType;
      state.enemyProperty.socketId = enemyProperty.socketId;
      state.enemyProperty.userName = enemyProperty.userName;
    },
    setBattleResult: (
      state,
      { payload }: PayloadAction<"win" | "lose" | "draw">
    ) => {
      state.battleResult = payload;
      state.matchRecord[payload]++;
    },
  },
});

export const {
  setOwnProperty,
  setEnemyProperty,
  setPurchaseDone,
  setArtSelectDone,
  setEnemyArtSelectDone,
  setEnemyPurchaseDone,
  setRoom,
  setBattleResult,
} = roomSlice.actions;

export default roomSlice.reducer;
