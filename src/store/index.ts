import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui-slice.js";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
