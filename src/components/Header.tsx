import { useContext } from "react";
import Logo from "../assets/logo-mobile.svg";
import { Context } from "../App";
import ArrowDown from "../assets/icon-chevron-down.svg";
import ArrowUp from "../assets/icon-chevron-up.svg";
import Plus from "../assets/icon-add-task-mobile.svg";
import Dots from "../assets/icon-vertical-ellipsis.svg";
function Header() {
  const { setShowAllBoards, setShowAddNewBoard, boardName, showAllBoards } =
    useContext(Context);
  return (
    <div className=" h-[6.4rem] bg-contentLight flex px-[2rem] ">
      <div className="flex w-[100%] justify-between items-center gap-[1rem]  ">
        <div
          className="flex items-center gap-[0.9rem]
        "
        >
          <img src={Logo} alt="Logo" />
          <div
            className="flex items-center gap-[0.9rem] cursor-pointer"
            onClick={() => {
              setShowAllBoards((prev) => !prev);
              setShowAddNewBoard(false);
            }}
          >
            <h1 className="text-[1.8rem] font-[700]"> {boardName}</h1>
            <img
              className={`${!showAllBoards ? "hidden" : "visible"} `}
              src={ArrowUp}
              alt="ArrowUp"
            />
            <img
              className={`${showAllBoards ? "hidden" : "visible"} `}
              src={ArrowDown}
              alt="ArrowDown"
            />
          </div>
        </div>
        <div className="flex items-center gap-[1rem]">
          <button className="w-[4.8rem] h-[3.2rem] bg-purple rounded-[2.4rem] flex items-center justify-center">
            <img src={Plus} alt="Plus" />
          </button>
          <img className="cursor-pointer" src={Dots} alt="more_icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
