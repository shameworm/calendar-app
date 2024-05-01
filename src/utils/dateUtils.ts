import { days } from "../models/days.model";

export function getDays(calendarView: string, state: days) {
  switch (calendarView) {
    case "Week": {
      return getDaysOfWeek(state.day, state.month, state.year);
    }
    case "Day": {
      const day: days[] = [
        {
          day: state.day,
          month: state.month,
          year: state.year,
        },
      ];
      return day;
    }
    case "Year": {
      return getDaysOfYear(state.year);
    }
    default: {
      return getDaysOfMonth(state.month, state.year);
    }
  }
}

export function getDaysOfMonth(month: number, year: number) {
  const days = new Date(`${month} 1, ${year}`).getDay() - 1;
  const prevMonthDaysNumberOfDay = new Date(year, month - 1, 0).getDate();
  const currMonthDaysNumberOfDay = new Date(year, month, 0).getDate();

  const daysOfMonth: days[] = [];
  for (let i = 0; i <= days; i++)
    daysOfMonth.unshift({ day: prevMonthDaysNumberOfDay - i, month, year });
  for (let i = 1; i <= currMonthDaysNumberOfDay; i++)
    daysOfMonth.push({ day: i, month, year, isCurrentMonth: true });
  const remainingDays =
    6 - new Date(`${year}-${month}-${currMonthDaysNumberOfDay}`).getDay();
  for (let i = 1; i <= remainingDays; i++) {
    daysOfMonth.push({ day: i, month: month + 1, year });
  }


  return daysOfMonth;
}

export function getDaysOfWeek(day: number, month: number, year: number) {
  const days = getDaysOfMonth(month, year);
  return days.slice(day, day + 7);
}

export function getDaysOfYear(year: number): days[] {
  const daysOfYear: days[] = [];
  for (let month = 1; month <= 12; month++) {
    const monthDays = getDaysOfMonth(month, year);
    daysOfYear.push(...monthDays);
  }
  return daysOfYear;
}
