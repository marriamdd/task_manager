import { useContext, useState } from "react";
import Logo from "../assets/logo-mobile.svg";
import { Context } from "../context/context";
import ArrowDown from "../assets/icon-chevron-down.svg";
import ArrowUp from "../assets/icon-chevron-up.svg";
import Plus from "../assets/icon-add-task-mobile.svg";
import Dots from "../assets/icon-vertical-ellipsis.svg";
import DeleteOrEditModal from "./DeleteOrEditModal";
function Header() {
  const {
    setShowHeaderDropdown,
    setShowAddNewBoard,
    currentBoardName,
    showHeaderDropdown,
    setShowEditBoard,
    setShowAddNewTask,
  } = useContext(Context);
  const [options, setOptions] = useState(false);

  return (
    <div className=" h-[6.4rem] bg-contentLight dark:bg-[#2B2C37] flex px-[2rem] ">
      <div className="flex w-[100%] justify-between items-center gap-[1rem]  ">
        <div
          className="flex items-center gap-[0.9rem] md:space-x-4
        "
        >
          <img src={Logo} alt="Logo" />
          <h3
            onClick={() => {
              setShowHeaderDropdown((prev) => !prev);
              setShowAddNewBoard(false);
              setShowEditBoard(false);
            }}
            className="hidden md:inline-block font-bold md:text-4xl dark:text-white"
          >
            Kanban
          </h3>
          <div className="flex items-center gap-[0.9rem] cursor-pointer ">
            <h1 className="text-[1.8rem] font-[700] md:ml-[10rem] lg:ml-[14rem] transition-all duration-500 ease-in-out dark:text-white">
              {" "}
              {currentBoardName}
            </h1>
            <img
              onClick={() => {
                setShowHeaderDropdown((prev) => !prev);
                setShowAddNewBoard(false);
                setShowEditBoard(false);
              }}
              className={`${
                !showHeaderDropdown ? "hidden" : "visible"
              } md:hidden`}
              src={ArrowUp}
              alt="ArrowUp"
            />
            <img
              onClick={() => {
                setShowHeaderDropdown((prev) => !prev);
                setShowAddNewBoard(false);
                setShowEditBoard(false);
              }}
              className={`${
                showHeaderDropdown ? "hidden" : "visible"
              }  md:hidden`}
              src={ArrowDown}
              alt="ArrowDown"
            />
          </div>
        </div>
        <div className="flex items-center gap-[1rem]">
          <button
            onClick={() => setShowAddNewTask((prev) => !prev)}
            className=" md:hidden button px-[2rem] py-[1.3rem]"
          >
            <img src={Plus} alt="Plus" />
          </button>
          <button
            onClick={() => setShowAddNewTask((prev) => !prev)}
            className="hidden  md:block  button px-[2rem] py-[1.3rem] bg-purple hover:bg-light_purple"
          >
            + Add New Task
          </button>
          <div className="flex flex-col items-center relative ">
            <img
              onClick={() => setOptions(!options)}
              className="cursor-pointer "
              src={Dots}
              alt="more_icon"
            />
            {options && (
              <DeleteOrEditModal
                setOptions={setOptions}
                title="Edit Board"
                showWhat={setShowEditBoard}
                deletewhat="Delete Board"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
