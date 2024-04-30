import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import arrowImg from "../../../assets/arrow.svg";

import { calendarActions } from "../../../store/slices/calendar-slice";

const HeaderActionSection: React.FC<{ currentDate: string }> = ({
  currentDate,
}) => {
  const dispatch = useDispatch();

  const onPrevDateHandler = () => {
    dispatch(calendarActions.prevMonth());
  };

  const onNextDateHandler = () => {
    dispatch(calendarActions.nextMonth());
  };

  const onGetTodaysDate = () => {
    dispatch(calendarActions.getCurrentDate());
  };

  return (
    <section className="flex items-center justify-between gap-5">
      <Button
        className="text-md text-white  p-2 px-5 rounded-xl shadow-lg bg-[#41B06E] duration-200 hover:opacity-80"
        onClick={onGetTodaysDate}
      >
        Today
      </Button>
      <Button
        onClick={onPrevDateHandler}
        className="hover:bg-gray-300 p-1 rounded-full transition hover duration-300"
      >
        <img src={arrowImg} alt="Previous date." />
      </Button>
      <Button onClick={onNextDateHandler}>
        <img
          src={arrowImg}
          alt="Next date."
          className="rotate-180 hover:bg-gray-300 p-1 rounded-full transition  duration-300"
        />
      </Button>
      <p className="">{currentDate}</p>
    </section>
  );
};

export default HeaderActionSection;
