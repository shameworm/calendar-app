export function getDaysOfMonth(month: number, year: number) {
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the day of the week for the first day of the month
  const days = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust if the first day is Sunday
   
  const prevMonthDaysNumberOfDay = new Date(year, month - 1, 0).getDate();
  const currMonthDaysNumberOfDay = new Date(year, month, 0).getDate();

  const daysOfMonth: number[] = [];
  for (let i = 0; i < days; i++)
    daysOfMonth.unshift(prevMonthDaysNumberOfDay - i);
  for (let i = 1; i <= currMonthDaysNumberOfDay; i++) daysOfMonth.push(i);

  return daysOfMonth;
}


export function getDaysOfWeek(day: number, month: number, year: number) {
  const days = getDaysOfMonth(month, year);
  return days.slice(day, day + 7);
}
