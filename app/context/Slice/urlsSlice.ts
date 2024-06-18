import { ModelUrlsState } from "@/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState: ModelUrlsState[] = [];

const UrlsState = createSlice({
  name: "UrlsState",
  initialState,
  reducers: {
    addUrls: (state, action: PayloadAction<ModelUrlsState>) => {
      state.push(action.payload);
    },
  },
});

// action creators are generated for each case reducer function
export const { addUrls } = UrlsState.actions;

export const urlsReducer = UrlsState.reducer;
