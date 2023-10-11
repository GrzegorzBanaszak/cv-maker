import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CreatorState {
  exampleType: string;
}

const initialState: CreatorState = {
  exampleType: "",
};

export const creatorSlice = createSlice({
  name: "creator",
  initialState,
  reducers: {
    setExampleType: (state, action: PayloadAction<string>) => {
      state.exampleType = action.payload;
    },
  },
});

export const { setExampleType } = creatorSlice.actions;

export default creatorSlice.reducer;
