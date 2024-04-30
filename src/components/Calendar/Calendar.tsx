import { days } from "../../models/days.model";
import CalendarViewMonth from "./CalendarViews/CalendarViewMonth";
import CalendarViewWeek from "./CalendarViews/CalendarViewWeek";

type CalendarProps = { days: days[]; view: string };
const Calendar: React.FC<CalendarProps> = ({ days, view }) => {
  return (
    <table className="w-full">
      {view === "Month" && <CalendarViewMonth days={days} />}
      {view === "Week" && <CalendarViewWeek days={days} />}
    </table>
  );
};

export default Calendar;
