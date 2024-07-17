import { useContext, useEffect } from "react";
import { Context } from "../context/context";
import { useNavigate, useParams } from "react-router-dom";

function DeleteUI() {
  const { setShowDeleteUI, jsonBoards, setJsonBoards, setCurrentBoardName } =
    useContext(Context);

  const { boardName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const localST = localStorage.getItem("boards");
    if (!localST) {
      localStorage.setItem("boards", JSON.stringify(jsonBoards));
    } else {
      const storage = JSON.parse(localST);
      setJsonBoards(storage);
    }
  }, [jsonBoards, setJsonBoards]);

  const deleteBoardFunc = () => {
    const filtered = jsonBoards.boards.filter(
      (item) => item.name !== boardName
    );
    localStorage.setItem("boards", JSON.stringify({ boards: filtered }));
    setShowDeleteUI(false);
    navigate("/");
    setCurrentBoardName("");
  };
  return (
    <div>
      <div
        onClick={() => setShowDeleteUI(false)}
        className="bg-[#000] fixed top-0 left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      <div
        className={`fixed flex text-[18px] md:w-[480px] md:h-[229px] flex-col gap-[2.4rem] top-[20%] px-[2rem]
             left-1/2 transform -translate-x-1/2  z-10  w-[34.3rem] h-[28.4rem] bg-contentLight  dark:bg-contentDarkBG py-[2rem] rounded-[0.8rem]`}
      >
        <h2 className="text-[#EA5555] font-[700]  whitespace-nowrap">
          Delete this board?
        </h2>
        <p className="text-[#828FA3] md:w-[416px] w-[295px] text-[13px]  leading-[23px]">
          Are you sure you want to delete the ‘Platform Launch’ board? This
          action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className="flex flex-col md:flex-row  gap-[1.6rem] items-center  ">
          <button
            onClick={deleteBoardFunc}
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
