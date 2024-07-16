import { useContext } from "react";
import { Context } from "../context/context";

import BoardsRendering from "./BardsRendering";

import ToggleMode from "./ToggleMode";
import CreateNewBoard from "./CreateNewBoard";

import HideIcon from "../assets/eye-slash.1.svg";
import { useDarkMode } from "./DarkModeContext";
function HeaderDropdown() {
  const {
    showHeaderDropdown,
    jsonBoards,
    setShowAddNewBoard,

    showAddNewBoard,
    setShowHeaderDropdown,
  } = useContext(Context);
  const { darkMode } = useDarkMode();
  if (!showHeaderDropdown) {
    return null;
  }
  console.log(jsonBoards.boards);
  return (
    <div className={`${darkMode ? "dark" : ""} relative`}>
      <div
        onClick={() => {
          setShowAddNewBoard(false);
          setShowHeaderDropdown(false);
        }}
        className="bg-[#000] md:hidden fixed top-0 left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      {!showAddNewBoard ? (
        <div className="fixed top-[15%] transition-all duration-500 ease-in-out  left-1/2 transform -translate-x-1/2 md:translate-x-0 z-10 w-[26.4rem] shadow-md shadow-[#364e7e1a] bg-contentLight  dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem] md:bottom-0 md:top-[63px] md:left-0 md:rounded-none lg:w-[30rem]">
          <div className=" h-[100%] flex flex-col">
            <h2 className="text-medium_Grey my-[1rem]  dark:text-[#828FA3] mx-[2rem] text-[1.2rem] font-[700]">{`ALL BOARDS (${jsonBoards.boards.length})`}</h2>

            <BoardsRendering />
            <ToggleMode />
            <div
              style={{ borderRadius: "0px 100px 100px 0px" }}
              onClick={() => setShowHeaderDropdown(false)}
              className="hidden  md:flex gap-[1.5rem] items-center  w-[24rem]  hover:bg-[#FFF] h-[48px]   mt-[2rem] mb-[4rem] cursor-pointer "
            >
              <img className="pl-[2rem]" src={HideIcon} alt="HideIcon" />

              <h2 className="text-[15px]  dark:text-[#828FA3]  font-[700] text-medium_Grey ">
                Hide Sidebar
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <CreateNewBoard />
      )}
    </div>
  );
}

export default HeaderDropdown;
