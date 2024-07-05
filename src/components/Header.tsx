import { useContext, useEffect, useRef, useState } from "react";
import Logo from "../assets/logo-mobile.svg";
import { Context } from "../App";
import ArrowDown from "../assets/icon-chevron-down.svg";
import ArrowUp from "../assets/icon-chevron-up.svg";
import Plus from "../assets/icon-add-task-mobile.svg";
import Dots from "../assets/icon-vertical-ellipsis.svg";
function Header() {
  const {
    setShowHeaderDropdown,
    setShowAddNewBoard,
    boardName,
    showHeaderDropdown,
    setShowEditBoard,
    setShowAddNewTask,
    setShowDeleteUI,
  } = useContext(Context);
  const [options, setOptions] = useState(false);

  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=" h-[6.4rem] bg-contentLight flex px-[2rem] ">
      <div className="flex w-[100%] justify-between items-center gap-[1rem]  ">
        <div
          className="flex items-center gap-[0.9rem] md:space-x-4
        "
        >
          <img src={Logo} alt="Logo" />
          <h3 className="hidden md:inline-block font-bold md:text-4xl">
            Kanban
          </h3>
          <div
            className="flex items-center gap-[0.9rem] cursor-pointer"
            onClick={() => {
              setShowHeaderDropdown((prev) => !prev);
              setShowAddNewBoard(false);
              setShowEditBoard(false);
            }}
          >
            <h1 className="text-[1.8rem] font-[700]"> {boardName}</h1>
            <img
              className={`${!showHeaderDropdown ? "hidden" : "visible"} `}
              src={ArrowUp}
              alt="ArrowUp"
            />
            <img
              className={`${showHeaderDropdown ? "hidden" : "visible"} `}
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
            className="hidden  md:block  button px-[2rem] py-[1.3rem]"
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
              <div
                ref={optionsRef}
                style={{
                  boxShadow: "0px 10px 20px 0px rgba(54, 78, 126, 0.25)",
                  textWrap: "nowrap",
                  borderRadius: "8px ",
                  padding: "16px",
                }}
                className=" optionsDiv absolute top-[4.3rem] right-[-10px]  bg-contentLight"
              >
                <h2
                  style={{
                    fontWeight: " 500",
                    fontSize: "13px",
                    lineHeight: "23px",
                    color: "rgb(130, 143, 163)",
                    width: "160px",
                  }}
                  onClick={() => setShowEditBoard(true)}
                >
                  Edit Board
                </h2>
                <h2
                  onClick={() => setShowDeleteUI(true)}
                  style={{
                    fontWeight: " 500",
                    fontSize: "13px",
                    lineHeight: "23px",
                    color: "rgb(234, 85, 85)",
                    width: "160px",
                    marginTop: "16px",
                  }}
                >
                  Delete Board
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
