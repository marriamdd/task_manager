import { useContext } from "react";
import { Context } from "../App";

export default function DeleteTaskUI() {
  const { setShowDeleteTaskUI, jsonBoards } = useContext(Context);

  console.log(jsonBoards.boards, "json");

  const deleteTaskFunc = () => {};
  return (
    <div>
      <div
        onClick={() => setShowDeleteTaskUI(false)}
        className="bg-[#000] fixed top-[6.4rem]  left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      <div
        className={`fixed flex text-[18px] flex-col gap-[2.4rem] top-[20%] px-[2rem]
           left-1/2 transform -translate-x-1/2   z-10  w-[34.3rem] h-[28.4rem] bg-contentLight  dark:bg-contentDarkBG py-[2rem] rounded-[0.8rem]`}
      >
        <h2 className="text-[#EA5555] font-[700]  whitespace-nowrap">
          Delete this task?
        </h2>
        <p className="text-[#828FA3] w-[295px] text-[13px]  leading-[23px]">
          Are you sure you want to delete the ‘Build settings UI’ task and its
          subtasks? This action cannot be reversed.
        </p>
        <div className="flex flex-col gap-[1.6rem] items-center ">
          <button
            onClick={deleteTaskFunc}
            className="hover:bg-[#FF9898]  text-[13px] w-[295px] rounded-[20px] h-[40px]"
            style={{
              background: "var(--Red, #EA5555)",
              color: "white",

              transition: "background-color 0.3s ease",
            }}
          >
            Delete
          </button>
          <button
            onClick={() => setShowDeleteTaskUI(false)}
            className="hover:bg-[rgba(99, 95, 199, 0.25)] text-[13px] rounded-[20px] w-[295px] h-[40px] text-[#635FC7] "
            style={{
              background: "rgba(99, 95, 199, 0.10)",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
