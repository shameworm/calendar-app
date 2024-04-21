import { useSelector } from "react-redux";

import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar/Sidebar";

import { RootState } from "./store";

const App: React.FC = () => {
  const sidebarIsActive = useSelector(
    (state: RootState) => state.ui.sidebarIsActive
  );

  return <Layout>{sidebarIsActive && <Sidebar />}</Layout>;
};

export default App;
