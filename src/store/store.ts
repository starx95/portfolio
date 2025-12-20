import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./headerSlice";

export const store = configureStore({
  reducer: {
    header: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;