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
      <thead className="table-head-day">
        <tr>
          <th>
            {formatDate(new Date(days[0].year, days[0].month - 1, days[0].day))}
          </th>
        </tr>
      </thead>
      <tbody id="table-body-day-content">
        <tr>
          <th>
            <div className="day-content"></div>
          </th>
        </tr>
      </tbody>
    </>
  );
};

export default CalendarViewDay;
