import { useContext } from "react";
import BoardIcon from "../assets/icon-board.svg";
import { Link } from "react-router-dom";
import { Context } from "../App";
import PurpleBoardIcon from "../assets/fluent_board-split-24-regular.svg";
function BoardsRendering() {
  const {
    jsonBoards,
    boardName,
    setShowAddNewBoard,
    setShowEditBoard,
    setShowHeaderDropdown,
  } = useContext(Context);

  return (
    <div className="max-h-[60vh] overflow-y-scroll">
      {jsonBoards.boards.map((board, index) => (
        <div
          style={{ borderRadius: "0px 100px 100px 0px" }}
          className={`flex gap-[2rem] mb-[0.5rem] w-[24rem]   font-[700] text-[1.5rem]  py-[1rem] px-[1.5rem] items-center 
            ${
              boardName === board.name
                ? "bg-purple text-[#FFF] "
                : "text-medium_Grey"
            }
           `}
          key={index}
        >
          <img
            className="w-[1.6rem] h-[1.6rem]"
            src={BoardIcon}
            alt="BoardIcon"
          />
          <Link
            onClick={() => {
              setShowAddNewBoard(false);
              setShowHeaderDropdown(false);
            }}
            to={`/${board.name}`}
          >
            <h2>{board.name}</h2>
          </Link>
        </div>
      ))}
      <div
        className={`flex gap-[2rem] mb-[0.5rem] w-[24rem] h-[4.8rem] font-[700] text-[1.5rem]  py-[1rem] px-[1.5rem] items-center 
           
           `}
      >
        <img
          className="w-[1.6rem] h-[1.6rem] ]"
          src={PurpleBoardIcon}
          alt="BoardIcon"
        />
        <h2
          onClick={() => {
            setShowAddNewBoard(true);
            setShowEditBoard(false);
          }}
          className=" text-purple"
        >
          + Create New Board
        </h2>
      </div>
    </div>
  );
}

export default BoardsRendering;
