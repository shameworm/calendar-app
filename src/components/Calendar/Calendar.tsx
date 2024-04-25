import CalendarViewMonth from "./CalendarViews/CalendarViewMonth";

type CalendarProps = {daysOfMonth: number[], view: string}
const Calendar: React.FC<CalendarProps> = ({daysOfMonth, view}) => {
  return (
    <table className="w-full">
      {view === "Month" && <CalendarViewMonth daysOfMonth={daysOfMonth}/>}
    </table>
  );
};

export default Calendar;
