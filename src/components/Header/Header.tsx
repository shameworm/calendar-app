import { days } from "../../models/days.model";
import HeaderActionSection from "./HeaderSections/HeaderActionSection";
import HeaderMainSection from "./HeaderSections/HeaderMainSection";
import HeaderSupportSection from "./HeaderSections/HeaderSupportSection";

type headerProps = {
  currentDate: days;
  todaysDate: days;
};
const Header: React.FC<headerProps> = ({ currentDate, todaysDate }) => {
  const formattedDate = new Date(
    currentDate.year!,
    currentDate.month! - 1,
    currentDate.day
  ).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

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
