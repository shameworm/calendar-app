import { Fragment } from "react/jsx-runtime";

import { days } from "../../../models/days.model";
import { getMonthName } from "../../../utils/dateUtils";
import CalendarViewMonth from "./CalendarViewMonth";

type CalendarViewYearProps = { days: days[][] };
const CalendarViewYear: React.FC<CalendarViewYearProps> = ({ days }) => {
  return (
    <>
      <tbody className="">
        {days.map((day, index) => (
          <Fragment key={index}>
            <tr>
              <td className="text-center font-bold">{getMonthName(index)}</td>
            </tr>
            <tr>
              <td>
                <CalendarViewMonth
                  key={index}
                  days={day}
                  styles="table-head-year"
                />
              </td>
            </tr>
          </Fragment>
        ))}
      </tbody>
    </>
  );
};

export default CalendarViewYear;
