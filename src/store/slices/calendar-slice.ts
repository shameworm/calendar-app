import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    currentDate: {
      day: new Date().getDate(),
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    },
    calendarView: "Month",
  },
  reducers: {
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
