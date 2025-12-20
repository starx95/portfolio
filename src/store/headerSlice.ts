// store/uiSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  headerHeight: number;
}

const initialState: UIState = {
  headerHeight: 0,
};

const uiSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderHeight(state, action: PayloadAction<number>) {
      state.headerHeight = action.payload;
    },
  },
});

export const { setHeaderHeight } = uiSlice.actions;
export default uiSlice.reducer;
