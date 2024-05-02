import { days } from "../../models/days.model";
import HeaderActionSection from "./HeaderSections/HeaderActionSection";
import HeaderMainSection from "./HeaderSections/HeaderMainSection";
import HeaderSupportSection from "./HeaderSections/HeaderSupportSection";

import { formatDate } from "../../utils/dateUtils";

type headerProps = {
  currentDate: days;
  todaysDate: days;
  view: string;
};
const Header: React.FC<headerProps> = ({ currentDate, todaysDate, view }) => {
  const formattedDate = formatDate(
    currentDate.day,
    currentDate.month,
    currentDate.year,
    view
  );

  return (
    <header className="container flex items-center justify-between pb-2 m-5 border-b-2">
      <div className="flex items-center justify-center gap-12">
        <HeaderMainSection currentDate={todaysDate.day} />
        <HeaderActionSection currentDate={formattedDate} />
      </div>
      <HeaderSupportSection />
    </header>
  );
};

export default Header;
