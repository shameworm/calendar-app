import { createSlice } from "@reduxjs/toolkit";

const getCurrentDate = () => {
  const currentDate = new Date();
  return {
    day: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
  };
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    currentDate: getCurrentDate(),
    calendarView: "Month",
  },
  reducers: {
    getCurrentDate: (state) => {
      state.currentDate = getCurrentDate();
    },
    next: (state) => {
      switch (state.calendarView) {
        case "Month": {
          state.currentDate.month += 1;
          break;
        }
        case "Week": {
          state.currentDate.day += 7;
          break;
        }
        case "Day": {
          state.currentDate.day += 1;
        }
      }
    },
    prev: (state) => {
      switch (state.calendarView) {
        case "Month": {
          state.currentDate.month -= 1;
          break;
        }
        case "Week": {
          state.currentDate.day -= 7;
          break;
        }
        case "Day": {
          state.currentDate.day -= 1;
        }
      }
    },
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
