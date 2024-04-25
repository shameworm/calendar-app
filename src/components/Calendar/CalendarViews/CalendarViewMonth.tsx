import CalendarBody from "../../UI/CalendarUI/CalendarBody";
import CalendarDays from "../../UI/CalendarUI/CalendarDays";

type CalendarViewMonthProps = { daysOfMonth: number[] };
const CalendarViewMonth: React.FC<CalendarViewMonthProps> = ({
  daysOfMonth,
}) => {
  console.log(daysOfMonth);
  return (
    <>
      <thead>
        <CalendarDays styles="table-head-month" />
      </thead>
      <tbody>
        <CalendarBody daysOfMonth={daysOfMonth} />
      </tbody>
    </>
  );
};

export default CalendarViewMonth;
