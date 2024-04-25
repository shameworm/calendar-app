import HeaderActionSection from "./HeaderSections/HeaderActionSection";
import HeaderMainSection from "./HeaderSections/HeaderMainSection";
import HeaderSupportSection from "./HeaderSections/HeaderSupportSection";

type headerProps = {
  currentDate: { day: number; month: number; year: number };
};
const Header: React.FC<headerProps> = ({ currentDate }) => {
  const formattedDate = new Date(
    currentDate.year,
    currentDate.month,
    currentDate.day
  ).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="container flex items-center justify-between pb-2 m-5 border-b-2">
      <div className="flex items-center justify-center gap-12">
        <HeaderMainSection currentDate={currentDate.day} />
        <HeaderActionSection currentDate={formattedDate} />
      </div>
      <HeaderSupportSection />
    </header>
  );
};

export default Header;
