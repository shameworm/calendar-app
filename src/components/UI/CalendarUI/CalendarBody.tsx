type CalendarBodyProps = { daysOfMonth: number[] };

const CalendarBody: React.FC<CalendarBodyProps> = ({ daysOfMonth }) => {
  const weeks = [];
  console.log(daysOfMonth)
  for (let i = 0; i < daysOfMonth.length; i += 7) {
    weeks.push(daysOfMonth.slice(i, i + 7));
  }

  return (
    <>
      {weeks.map((week, weekIndex) => (
        <tr key={weekIndex} className="text-center h-20">
          {week.map((dayOfMonth, dayIndex) => (
            <td
              key={dayIndex}
              className="border p-1 h-40 w-40 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 "
            >
              <div className="flex flex-col h-40 w-40 mx-auto overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 hover">{dayOfMonth}</span>
                </div>
              </div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default CalendarBody;
