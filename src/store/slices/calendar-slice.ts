import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    todaysDate: getCurrentDate(),
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
          let { month, year } = state.currentDate;
          month += 1;
          if (month > 12) {
            month = 1;
            year += 1;
          }
          state.currentDate = { ...state.currentDate, month, year };
          break;
        }
        case "Week": {
          let { day, month, year } = state.currentDate;
          day += 7;
          const daysInMonth = new Date(year, month, 0).getDate();
          if (day > daysInMonth) {
            day -= daysInMonth;
            month += 1;
            if (month > 12) {
              month = 1;
              year += 1;
            }
          }
          state.currentDate = { day, month, year };
          break;
        }
        case "Day": {
          let { day, month, year } = state.currentDate;
          day += 1;
          const daysInMonth = new Date(year, month, 0).getDate();
          if (day > daysInMonth) {
            day = 1;
            month += 1;
            if (month > 12) {
              month = 1;
              year += 1;
            }
          }
          state.currentDate = { day, month, year };
          break;
        }
      }
    },
    prev: (state) => {
      switch (state.calendarView) {
        case "Month": {
          let { month, year } = state.currentDate;
          month -= 1;
          if (month < 1) {
            month = 12;
            year -= 1;
          }
          state.currentDate = { ...state.currentDate, month, year };
          break;
        }
        case "Week": {
          let { day, month, year } = state.currentDate;
          day -= 7;
          if (day < 1) {
            const prevMonthDays = new Date(year, month - 1, 0).getDate();
            day += prevMonthDays;
            month -= 1;
            if (month < 1) {
              month = 12;
              year -= 1;
            }
          }
          state.currentDate = { day, month, year };
          break;
        }
        case "Day": {
          let { day, month, year } = state.currentDate;
          day -= 1;
          if (day < 1) {
            month -= 1;
            if (month < 1) {
              month = 12;
              year -= 1;
            }
            const daysInPrevMonth = new Date(year, month, 0).getDate();
            day = daysInPrevMonth;
          }
          state.currentDate = { day, month, year };
          break;
        }
      }
    },
    setCalendarView(state, action: PayloadAction<string>) {
      state.calendarView = action.payload;
    },
  },
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
