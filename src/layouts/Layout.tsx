import React, { useContext } from "react";
import { Context } from "../App";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HeaderDropdown from "../components/HeaderDropdown";
import AddNewTask from "../components/AddNewTask";
import Subtasks from "../components/Subtasks";

function Layout() {
  const { darkMode } = useContext(Context);

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
