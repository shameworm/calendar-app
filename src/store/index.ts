import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./slices/ui-slice.js";
import calendarSlice from "./slices/calendar-slice.js";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    calendar: calendarSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
