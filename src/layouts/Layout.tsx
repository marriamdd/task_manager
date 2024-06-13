import React, { useContext } from "react";
import { Context } from "../App";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HeaderDropdown from "../components/HeaderDropdown";

function Layout() {
  const { darkMode } = useContext(Context);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <HeaderDropdown />
      <Outlet />
    </div>
  );
}

export default Layout;
