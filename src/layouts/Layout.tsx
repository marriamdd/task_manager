import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HeaderDropdown from "../components/HeaderDropdown";
import AddNewTask from "../components/AddNewTask";
import Subtasks from "../components/Subtasks";
import EyeIcon from "../assets/Group 3.svg";
import { useDarkMode } from "../components/DarkModeContext";
import { useContext } from "react";
import { Context } from "../context/context";

function Layout() {
  const { darkMode } = useDarkMode();
  const { setShowEditBoard, setShowAddNewBoard, setShowHeaderDropdown } =
    useContext(Context);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />

      <HeaderDropdown />

      <AddNewTask />
      <Subtasks />
      <div className=" ak bottom-[3rem] absolute md:flex hidden ">
        <img
          onClick={() => {
            setShowHeaderDropdown(true);
            setShowAddNewBoard(false);
            setShowEditBoard(false);
          }}
          className="hover:opacity-50 cursor-pointer"
          src={EyeIcon}
          alt="EyeIcon"
        />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
