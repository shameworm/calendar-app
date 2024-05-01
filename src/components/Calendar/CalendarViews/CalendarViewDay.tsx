import { days } from "../../../models/days.model";

type CalendarViewDayProps = { days: days[] };
const CalendarViewDay: React.FC<CalendarViewDayProps> = ({ days }) => {
  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div className="text-center bg-[#41B06E] rounded-t-full text-white">
        {formatDate(new Date(days[0].year, days[0].month - 1, days[0].day))}
      </div>
      <div className="rounded-t-none rounded-2xl text-center text-3xl border p-96 w-full overflow-auto hover:bg-gray-300 transition cursor-pointer duration-500 ease"></div>
    </>
  );
};

export default CalendarViewDay;
