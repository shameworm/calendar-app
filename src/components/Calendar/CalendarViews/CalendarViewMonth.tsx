import { days } from "../../../models/days.model";
import CalendarDays from "../../UI/CalendarUI/CalendarDays";

type CalendarViewMonthProps = { days: days[]; styles: string };
const CalendarViewMonth: React.FC<CalendarViewMonthProps> = ({
  days,
  styles,
}) => {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <>
      <thead>
        <CalendarDays styles={styles} />
      </thead>
      <tbody>
        {weeks.map((week, weekIndex) => (
          <tr key={weekIndex} className="text-center h-20">
            {week.map((day, dayIndex) => (
              <td
                key={dayIndex + Math.random()}
                className={`border p-1 h-40 w-40 overflow-auto  ${
                  !day.isCurrentMonth
                    ? "bg-gray-400 cursor-not-allowed hover:bg-none"
                    : "hover:bg-gray-300 transition cursor-pointer duration-500 ease"
                }`}
              >
                <div className="flex flex-col h-40 w-40 mx-auto overflow-hidden">
                  <div
                    className={`${
                      day.currentDay ? "bg-[#41B06E] rounded-full p-1" : ""
                    }`}
                  >
                    <span className={"text-gray-950"}>{day.day}</span>
                  </div>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default CalendarViewMonth;
