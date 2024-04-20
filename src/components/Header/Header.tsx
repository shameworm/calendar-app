import { useState, useEffect } from "react";

import HeaderActionSection from "./HeaderSections/HeaderActionSection";
import HeaderMainSection from "./HeaderSections/HeaderMainSection";
import HeaderSupportSection from "./HeaderSections/HeaderSupportSection";

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(new Date());
    };

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilNextDay = tomorrow.getTime() - now.getTime();

    const timeoutId = setTimeout(() => {
      updateDate();
      const intervalId = setInterval(updateDate, 24 * 60 * 60 * 1000);
      return () => clearInterval(intervalId);
    }, timeUntilNextDay);

    return () => clearTimeout(timeoutId);
  }, []);

  const formattedDate = `${currentDate
    .getDate()
    .toString()
    .padStart(2, "0")}.${(currentDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${currentDate.getFullYear()}`;

  return (
    <header className="container flex items-center justify-between pb-2 m-5 border-b-2">
      <div className="flex items-center justify-center gap-12">
        <HeaderMainSection currentDate={currentDate.getDate()} />
        <HeaderActionSection currentDate={formattedDate} />
      </div>
      <HeaderSupportSection />
    </header>
  );
};

export default Header;
