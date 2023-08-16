import { configureStore } from "@reduxjs/toolkit";
import { categorySlice, MainSlice } from "./Slices";

export const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
    mainList: MainSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;