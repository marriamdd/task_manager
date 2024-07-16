import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HeaderDropdown from "../components/HeaderDropdown";
import AddNewTask from "../components/AddNewTask";
import Subtasks from "../components/Subtasks";

import { useDarkMode } from "../components/DarkModeContext";

function Layout() {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <HeaderDropdown />
      <AddNewTask />
      <Subtasks />
      <Outlet />
    </div>
  );
}

export default Layout;
