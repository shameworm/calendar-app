import { days } from "../../../models/days.model";
import CalendarDays from "../../UI/CalendarUI/CalendarDays";

type CalendarViewMonthProps = { days: days[] };
const CalendarViewWeek: React.FC<CalendarViewMonthProps> = ({ days }) => {
  return (
    <>
      <thead>
        <CalendarDays styles="table-head" />
      </thead>
      <tbody>
        <tr className="text-center">
          {days.map((day, dayIndex) => (
            <td
              key={dayIndex + Math.random()}
              className="border p-1 h-40 w-40 overflow-auto hover:bg-gray-300 transition cursor-pointer duration-500 ease"
            >
              <div className="flex flex-col min-h-screen w-40 mx-auto overflow-hidden">
                <div
                  className={`${
                    day.currentDay ? "bg-[#41B06E] rounded-full p-1" : ""
                  }`}
                >
                  <span className={`text-gray-950`}>{day.day}</span>
                </div>
              </div>
            </td>
          ))}
        </tr>
      </tbody>
    </>
  );
};

export default CalendarViewWeek;
