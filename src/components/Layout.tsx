import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Calendar from "../components/Calendar/Calendar";

import { RootState } from "../store";
import { getDaysOfMonth } from "../utils/dateUtils";

const Layout: React.FC = () => {
  const sidebarIsActive = useSelector(
    (state: RootState) => state.ui.sidebarIsActive
  );

  const { currentDate, calendarView } = useSelector(
    (state: RootState) => state.calendar
  );

  return (
    <Fragment>
      <Header currentDate={currentDate} />
      <main className={`${!sidebarIsActive ? "" : "flex"}`}>
        {sidebarIsActive && <Sidebar />}
        <section className="mx-auto">
          <Calendar
            daysOfMonth={getDaysOfMonth(currentDate.month, currentDate.year)}
            view={calendarView}
          />
        </section>
      </main>
    </Fragment>
  );
};

export default Layout;
