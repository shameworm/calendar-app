import { days } from "../models/days.model";

export function getDays(
  calendarView: string,
  state: { day: number; month: number; year: number }
) {
  switch (calendarView) {
    case "Week": {
      return getDaysOfWeek(state.day, state.month, state.year);
    }
    case "Day": {
      const day: days[] = [{ day: state.day }];
      return day;
    }
    // case "Year": {
    // TODO Provide solution to the year displaying
    //   return getDaysOfWeek(state.day, state.month, state.year);
    // }
    // Return the Month View by default
    default: {
      return getDaysOfMonth(state.month, state.year);
    }
  }
}

export function getDaysOfMonth(month: number, year: number): days[] {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const prevMonth = month === 1 ? 12 : month - 1;
  const prevMonthDays = new Date(year, prevMonth, 0).getDate();
  const days = firstDayOfMonth === 0 ? 7 : firstDayOfMonth;

  const daysOfMonth = [];
  for (let i = days; i > 0; i--)
    daysOfMonth.push({
      day: prevMonthDays - i + 1,
      isCurrentMonth: false,
      currentDay: false,
    });
  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentDay = month === currentMonth && i === currentDate.getDate();
    daysOfMonth.push({
      day: i,
      isCurrentMonth: true,
      currentDay: isCurrentDay,
    });
  }

  const remainingDays = 7 - (daysOfMonth.length % 7);

  for (let i = 1; i <= remainingDays; i++)
    daysOfMonth.push({ day: i, isCurrentMonth: false, currentDay: false });

  return daysOfMonth;
}

export function getDaysOfWeek(day: number, month: number, year: number) {
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  // Calculate the start index of the week
  let startIndex = day - firstDayOfMonth;

  if (startIndex < 1) {
    const prevMonthDays = new Date(year, month - 1, 0).getDate();
    startIndex = prevMonthDays + startIndex;
  }

  const daysOfWeek = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = startIndex + i;
    if (currentDay <= daysInMonth && currentDay > 0) {
      daysOfWeek.push({
        day: currentDay,
        isCurrentMonth: true,
        currentDay: false,
      });
    } else {
      daysOfWeek.push({
        day:
          currentDay <= 0 ? currentDay + daysInMonth : currentDay - daysInMonth,
        isCurrentMonth: false,
        currentDay: false,
      });
    }
  }

  return daysOfWeek;
}
