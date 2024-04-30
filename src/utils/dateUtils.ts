export function getDaysOfMonth(month: number, year: number) {
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay(); 
  const daysInMonth = new Date(year, month, 0).getDate();

  const prevMonth = month === 1 ? 12 : month - 1;
  const prevMonthDays = new Date(year, prevMonth, 0).getDate();
  const days = (firstDayOfMonth === 0 ? 7 : firstDayOfMonth) ; 
   
  const daysOfMonth: number[] = [];
  for (let i = days; i > 0; i--)
    daysOfMonth.push(prevMonthDays - i + 1);
  for (let i = 1; i <= daysInMonth; i++) 
    daysOfMonth.push(i);

  return daysOfMonth;
}


export function getDaysOfWeek(day: number, month: number, year: number) {
  const days = getDaysOfMonth(month, year);
  return days.slice(day, day + 7);
}
