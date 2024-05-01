import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Calendar from "../components/Calendar/Calendar";

import { RootState } from "../store";
import { getDays } from "../utils/dateUtils";

const Layout: React.FC = () => {
  const sidebarIsActive = useSelector(
    (state: RootState) => state.ui.sidebarIsActive
  );

  const { currentDate, calendarView, todaysDate } = useSelector(
    (state: RootState) => state.calendar
  );

  return (
    <Fragment>
      <Header todaysDate={todaysDate} currentDate={currentDate} />
      <main className={`${!sidebarIsActive ? "" : "flex"}`}>
        {sidebarIsActive && <Sidebar />}
        <section className="mx-auto">
          <Calendar
            days={getDays(calendarView, currentDate)}
            view={calendarView}
          />
        </section>
      </main>
    </Fragment>
  );
};

export default Layout;
