import { useDispatch } from "react-redux";

import Button from "../../UI/Button";

import { uiActions } from "../../../store/slices/ui-slice";

const HeaderMainSection: React.FC<{ currentDate: number }> = ({
  currentDate,
}) => {
  const dispatch = useDispatch();

  const toogleSidebar = () => {
    dispatch(uiActions.toogleSidebar());
  };

  return (
    <section className="flex items-center justify-between gap-8">
      <Button className="hamburger" onClick={toogleSidebar}>
        <span className="block w-8 h-0.5 bg-gray-500"></span>
        <span className="block w-7 h-0.5 bg-gray-500"></span>
        <span className="block w-6 h-0.5 bg-gray-500"></span>
      </Button>
      <div className="w-10 rounded-xl bg-[#41B06E] p-1">
        <div className="text-center text-md font-bold text-white">
          {currentDate}
        </div>
      </div>
      <span>Calendar</span>
    </section>
  );
};

export default HeaderMainSection;
