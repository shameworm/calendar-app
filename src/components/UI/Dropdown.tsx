import { useDispatch, useSelector } from "react-redux";
import arrowImg from "../../assets/arrow.svg";
import Button from "./Button";

import { uiActions } from "../../store/slices/ui-slice";
import { calendarActions } from "../../store/slices/calendar-slice";
import { RootState } from "../../store";

const Dropdown: React.FC = () => {
  const dispatch = useDispatch();
  const dropdownIsActive = useSelector(
    (state: RootState) => state.ui.dropdownIsActive
  );

  const calendarView = useSelector(
    (state: RootState) => state.calendar.calendarView
  );

  const switchCalendarView = (view: string) => {
    dispatch(calendarActions.setCalendarView(view));
  };

  const toogleDropdown = () => {
    dispatch(uiActions.toogleDropdown());
  };

  return (
    <div className="relative cursor-pointer flex justify-between lg:max-w-sm ">
      <Button
        onClick={toogleDropdown}
        className="w-28 pl-2 pr-7 py-1 text-sm bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-[#41B06E] relative"
      >
        {calendarView}
        {dropdownIsActive && (
          <div
            id="dropdown-menu"
            className="absolute top-10 w-28 border border-gray-300 bg-white shadow-md mt-2 rounded-md"
          >
            <div
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => switchCalendarView("Day")}
            >
              <span>Day</span>
            </div>
            <div
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => switchCalendarView("Week")}
            >
              <span>Week</span>
            </div>
            <div
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => switchCalendarView("Month")}
            >
              <span>Month</span>
            </div>
            <div
              className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              onClick={() => switchCalendarView("Year")}
            >
              <span>Year</span>
            </div>
          </div>
        )}
      </Button>
      <div
        className={`absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none transition-transform duration-500 ${
          dropdownIsActive ? "-rotate-90" : "rotate-90"
        }`}
      >
        <img src={arrowImg} className="h-4 w-5" alt="Dropdown Arrow" />
      </div>
    </div>
  );
};

export default Dropdown;
