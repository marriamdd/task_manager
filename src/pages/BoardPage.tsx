import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Subtask } from "../App";
import { Context } from "../context/context";
import CreateNewBoard from "../components/CreateNewBoard";
import DeleteUI from "../components/DeleteBoardUI";
import DeleteTaskUI from "../components/DeleteTaskUI";

function BoardPage() {
  const { boardName } = useParams();
  const colors = [
    "#49C4E5",
    "#8471F2",
    "#67E2AE",
    "#FF8C00",
    "#4B0082",
    "#FF1493",
    "#DAA520",
    "#00FA9A",
    "#FF6347",
    "#00BFFF",
    "#8B0000",
    "#6A5ACD",
    "#2E8B57",
    "#FFD700",
    "#F08080",
    "#778899",
    "#B22222",
    "#008080",
    "#FFA07A",
    "#FF00FF",
  ];
  const {
    setCurrentBoardName,
    jsonBoards,
    setShowSubtasks,
    showEditBoard,
    setShowEditBoard,
    setCurrentPage,
    currentPage,
    setShowEditTask,
    setShowAddNewTask,
    setShowAddNewBoard,
    showDeleteUI,
    showDeleteTaskUI,
    showHeaderDropdown,
  } = useContext(Context);

  useEffect(() => {
    if (boardName) {
      const boardNamesArray = jsonBoards.boards.map((item) => item.name);
      if (boardNamesArray.includes(boardName)) {
        setCurrentBoardName(boardName);
      }
    }
  }, [boardName, jsonBoards.boards, setCurrentBoardName]);

  const navigate = useNavigate();
  useEffect(() => {
    const currentBoard =
      jsonBoards.boards.find((item) => item.name === boardName) || null;
    setCurrentPage(currentBoard);
    if (!currentBoard) {
      navigate("/NotFound");
    }
  }, [jsonBoards, boardName]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const completedSubtasks = (subtasks: any) => {
    return subtasks.filter((task: Subtask) => task.isCompleted);
  };

  return (
    <>
      <div
        className={`scrollbar flex gap-2 ${
          showHeaderDropdown
            ? "md:pl-[280px] lg:pl-[320px] transition-all duration-[1s] "
            : ""
        }  px-[1.5rem] py-2 w-full overflow-x-auto transition-all duration-[1s]  `}
      >
        {currentPage?.columns.map((item, index) => (
          <div key={index}>
            <div className="flex  gap-[0.5rem]">
              <div
                style={{
                  marginTop: "1rem",
                  backgroundColor: colors[index],
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                }}
              ></div>
              <h2 className="text-medium_Grey text-[1.8rem] w-[28rem] pb-[1rem]">{`${currentPage?.columns[index]?.name} (${currentPage?.columns[index]?.tasks.length}) `}</h2>
            </div>
            <div>
              {item.tasks.map((m, index) => (
                <div
                  key={index}
                  onClick={() =>
                    setShowSubtasks((prev) => ({
                      ...prev,
                      show: true,
                      boardName: currentPage.name,
                      taskTitle: m.title,
                      description: m.description,
                      status: m.status,

                      subtasks: m.subtasks.map((task) => ({
                        title: task.title,
                        isCompleted: task.isCompleted,
                      })),
                    }))
                  }
                  className=" cursor-pointer w-[28.8rem] px-[1.6rem] py-[2.3rem] mb-[1rem]  rounded-[0.8rem] bg-contentLight dark:bg-contentDarkBG"
                >
                  <p>{m.title}</p>
                  <h3 className="text-[1.2rem] font-[700] text-medium_Grey pt-[0.5rem]">{`Subtasks (${
                    completedSubtasks(m.subtasks).length
                  } of ${m.subtasks.length})`}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className=" flex justify-center items-center">
          <h2
            onClick={() => {
              setShowAddNewBoard(true);
              setShowAddNewTask(false);
              setShowEditTask(true);
              setShowEditBoard(true);
              setShowSubtasks((prev) => ({ ...prev, show: false }));
            }}
            className="text-medium_Grey ml-[1rem] hover:bg-[#b4b2e3] text-[2.4rem] cursor-pointer hover:dark:text-[white] hover:text-purple dark:bg-[#20212C] dark:text-purple  font-[700] w-[28.8rem] h-[6.1rem]  transition-all duration-[1s] shadow-inner -ml-18 -mt-44 -z-247 -mr-139 bg-rgba-214-207-214 text-center py-[1.2rem] rounded-[0.8rem]"
          >
            + New Column
          </h2>
        </div>
      </div>

      {showEditBoard && <CreateNewBoard />}
      {showDeleteUI && <DeleteUI />}
      {showDeleteTaskUI && <DeleteTaskUI />}
    </>
  );
}

export default BoardPage;
