import { useDispatch, useSelector } from "react-redux";

import arrowImg from "../../assets/arrow.svg";

import Button from "./Button";
import { uiActions } from "../../store/slices/ui-slice";
import { RootState } from "../../store";

const Dropdown: React.FC = () => {
  const dispatch = useDispatch();
  const dropdownIsActive = useSelector(
    (state: RootState) => state.ui.dropdownIsActive
  );

  // const calendarView = useSelector((state: RootState) => state.calendar.calendarView)

  const toogleDropdown = () => {
    dispatch(uiActions.toogleDropdown());
  };

  return (
    <div className="relative cursor-pointer flex justify-between lg:max-w-sm ">
      <Button
        onClick={toogleDropdown}
        className="pl-2 pr-7 py-1 text-sm bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-[#41B06E]"
      >
        Month
        {dropdownIsActive && (
          <div
            id="dropdown-menu"
            className="absolute top-50 w-28 border border-gray-300 bg-white shadow-md mt-2"
          >
            <div className="py-4 px-4 cursor-pointer hover:bg-gray-100">
              <Button>Year</Button>
            </div>
            <div className="py-4 px-4 cursor-pointer hover:bg-gray-100">
              <Button>Week</Button>
            </div>
            <div className="py-4 px-4 cursor-pointer hover:bg-gray-100">
              <Button>Day</Button>
            </div>
          </div>
        )}
      </Button>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <img src={arrowImg} className=" h-4 w-5 rotate-[-90deg]" />
      </div>
    </div>
  );
};

export default Dropdown;
