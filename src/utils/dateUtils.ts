import { days } from "../models/days.model";

export function getMonthName(monthIndex: number) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex];
}

export function formatDate(
  day: number,
  month: number,
  year: number,
  view: string
) {
  const formattedDate = new Date(year, month - 1, day).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  switch (view) {
    case "Day": {
      return formattedDate;
    }
    case "Week": {
      const firstDayOfWeek = new Date(
        year,
        month - 1,
        day - new Date(year, month - 1, day).getDay()
      );
      const lastDayOfWeek = new Date(
        year,
        month - 1,
        day + (6 - new Date(year, month - 1, day).getDay())
      );
      return `${firstDayOfWeek.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
      })} - ${lastDayOfWeek.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
      })}, ${year}`;
    }
    case "Year": {
      return new Date(year, 0, 1).toLocaleDateString("en-US", {
        year: "numeric",
      });
    }
    // Asumming the default view is always Month
    default: {
      return new Date(year, month - 1, 1).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });
    }
  }
}

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
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();
  const daysOfWeek: days[] = [];
  
  const firstDayOfWeek = new Date(year, month - 1, day - dayOfWeek);
  
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(firstDayOfWeek);
    currentDate.setDate(firstDayOfWeek.getDate() + i);
    daysOfWeek.push({
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    });
  }
  
  return daysOfWeek;
}

export function getDaysOfYear(year: number): days[][] {
  const daysOfYear: days[][] = [];
  for (let month = 1; month <=  12; month++) {
    daysOfYear.push(getDaysOfMonth(month, year));
  }
  return daysOfYear;
}
