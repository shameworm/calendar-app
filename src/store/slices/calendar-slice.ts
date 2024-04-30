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
    nextMonth: (state) => {
      state.currentDate.month += 1;
    },
    prevMonth: (state) => {
      state.currentDate.month -= 1;
    },
    nextDay: (state) => {
      state.currentDate.day += 1;
    },
    prevDay: (state) => {
      state.currentDate.day -= 1;
    },
    nextWeek: (state) => {
      state.currentDate.day += 7;
    },
    prevWeek: (state) => {
      state.currentDate.day -= 7;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
