import { days } from "../../../models/days.model";
import CalendarBody from "../../UI/CalendarUI/CalendarBody";
import CalendarDays from "../../UI/CalendarUI/CalendarDays";

type CalendarViewMonthProps = { days: days[] };
const CalendarViewWeek: React.FC<CalendarViewMonthProps> = ({ days }) => {
  return (
    <>
      <thead>
        <CalendarDays styles="table-head" />
      </thead>
      <tbody>
        <CalendarBody days={days} />
      </tbody>
    </>
  );
};

export default CalendarViewWeek;
