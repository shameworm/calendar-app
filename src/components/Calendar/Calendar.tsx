import { days } from "../../models/days.model";
import CalendarViewMonth from "./CalendarViews/CalendarViewMonth";
import CalendarViewWeek from "./CalendarViews/CalendarViewWeek";
import CalendarViewDay from "./CalendarViews/CalendarViewDay";
import CalendarViewYear from "./CalendarViews/CalendarViewYear";

type CalendarProps = { days: days[] | days[][]; view: string };
const Calendar: React.FC<CalendarProps> = ({ days, view }) => {
  return (
    <table className="w-full">
      {view === "Week" && <CalendarViewWeek days={days as days[]} />}
      {view === "Month" && (
        <CalendarViewMonth days={days as days[]} styles="table-head-default" />
      )}
      {view === "Year" && <CalendarViewYear days={days as days[][]} />}
      {view === "Day" && <CalendarViewDay days={days as days[]} />}
    </table>
  );
};

export default Calendar;
