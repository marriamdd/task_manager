import { useContext } from "react";
import { Context } from "../App";

function DeleteUI() {
  const { setShowDeleteUI } = useContext(Context);
  return (
    <div>
      <div
        onClick={() => setShowDeleteUI(false)}
        className="bg-[#000] fixed top-[6.4rem]  left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      <div
        className={`fixed flex text-[18px] flex-col gap-[2.4rem] top-[20%] px-[2rem]
           left-[4%]  overflow-y-scroll z-10  w-[34.3rem] h-[28.4rem] bg-contentLight  dark:bg-contentDarkBG py-[2rem] rounded-[0.8rem]`}
      >
        <h2 className="text-[#EA5555] font-[700]  whitespace-nowrap">
          Delete this board?
        </h2>
        <p className="text-[#828FA3] w-[295px] text-[13px]  leading-[23px]">
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className="flex flex-col gap-[1.6rem] items-center ">
          <button
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
            onClick={() => setShowDeleteUI(false)}
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

export default DeleteUI;
