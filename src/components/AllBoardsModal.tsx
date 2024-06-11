import { useContext } from "react";
import { Context } from "../App";
import ReactDOM from "react-dom";
import BoardsRendering from "./BardsRendering";
import ToggleMode from "./ToggleMode";
import CreateNewBoard from "./CreateNewBoard";

function AllBoards() {
  const { showAllBoards, jsonBoards, darkMode, showAddNewBoard } =
    useContext(Context);
  const portalContainer = document.getElementById("portal") as Element;
  if (!showAllBoards) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={`${darkMode ? "dark" : ""} relative `}>
      <div className="bg-[#000] fixed top-[6.4rem]  left-0 right-0 bottom-0 opacity-[0.5] z-10"></div>
      {!showAddNewBoard ? (
        <div className="fixed top-[15%] left-[15%]  z-10 w-[26.4rem] bg-contentLight  dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem]">
          <div className=" h-[100%]">
            <h2 className="text-medium_Grey my-[1rem] mx-[2rem] text-[1.2rem] font-[700]">{`ALL BOARDS (${jsonBoards.boards.length})`}</h2>

            <BoardsRendering />
            <ToggleMode />
          </div>
        </div>
      ) : (
        <div className="fixed top-[30%] left-[4%]  z-10 w-[34.3rem] bg-contentLight  dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem]">
          <CreateNewBoard />
        </div>
      )}
    </div>,
    portalContainer
  );
}

export default AllBoards;