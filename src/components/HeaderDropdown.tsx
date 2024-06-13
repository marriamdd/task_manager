import { useContext } from "react";
import { Context } from "../App";

import BoardsRendering from "./BardsRendering";
import ToggleMode from "./ToggleMode";
import CreateNewBoard from "./CreateNewBoard";

function HeaderDropdown() {
  const {
    showHeaderDropdown,
    jsonBoards,
    setShowAddNewBoard,
    darkMode,
    showAddNewBoard,
    setShowHeaderDropdown,
  } = useContext(Context);

  if (!showHeaderDropdown) {
    return null;
  }

  return (
    <div className={`${darkMode ? "dark" : ""} relative `}>
      <div
        onClick={() => {
          setShowAddNewBoard(false);
          setShowHeaderDropdown(false);
        }}
        className="bg-[#000] fixed top-[6.4rem]  left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      {!showAddNewBoard ? (
        <div className="fixed top-[15%]  ease left-[15%]  z-10 w-[26.4rem] bg-contentLight  dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem]">
          <div className=" h-[100%]">
            <h2 className="text-medium_Grey my-[1rem] mx-[2rem] text-[1.2rem] font-[700]">{`ALL BOARDS (${jsonBoards.boards.length})`}</h2>

            <BoardsRendering />
            <ToggleMode />
          </div>
        </div>
      ) : (
        <CreateNewBoard />
      )}
    </div>
  );
}

export default HeaderDropdown;
