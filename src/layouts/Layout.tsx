import React, { useContext } from "react";
import { Context } from "../App";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AllBoards from "../components/AllBoardsModal";

function Layout() {
  const { darkMode } = useContext(Context);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <AllBoards />
      <Outlet />
    </div>
  );
}

export default Layout;
