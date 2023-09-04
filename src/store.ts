import { configureStore } from "@reduxjs/toolkit";
import { BoardDetailSlice, categorySlice, MainSlice, PostListSlice } from "./Slices";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    mainList: MainSlice.reducer,
    postList: PostListSlice.reducer,
    boardDetail: BoardDetailSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
