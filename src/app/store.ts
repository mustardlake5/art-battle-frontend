import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../slices/statusSlice";
import itemsReducer from "../slices/itemsSlice";
import cartReducer from "../slices/cartSlice";
import roomReducer from "../slices/roomSlice";

export const store = configureStore({
  reducer: {
    status: statusReducer,
    items: itemsReducer,
    cart: cartReducer,
    room: roomReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
