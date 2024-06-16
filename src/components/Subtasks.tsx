import { useContext } from "react";
import { Context } from "../App";
import Dots from "../assets/icon-vertical-ellipsis.svg";

function Subtasks() {
  const {
    showSubtasks,
    setShowSubtasks,
    jsonBoards,
    setJsonBoards,
    currentPage,
  } = useContext(Context);

  if (!showSubtasks.show) {
    return;
  }

  const filtered = showSubtasks.subtasks.filter((item) => item.isCompleted);

  const handleCheckboxChange = (subtaskIndex: number) => {
    setShowSubtasks((prev) => {
      const updatedSubtasks = prev.subtasks.map((subtask, i) =>
        i === subtaskIndex
          ? { ...subtask, isCompleted: !subtask.isCompleted }
          : subtask
      );

      const updatedState = {
        ...prev,
        subtasks: updatedSubtasks,
      };

      const updatedBoards = jsonBoards.boards.map((board) => {
        if (board.name === showSubtasks.boardName) {
          return {
            ...board,
            columns: board.columns.map((column) => {
              return {
                ...column,
                tasks: column.tasks.map((task) => {
                  if (task.title === showSubtasks.taskTitle) {
                    return {
                      ...task,
                      subtasks: updatedSubtasks,
                    };
                  }
                  return task;
                }),
              };
            }),
          };
        }
        return board;
      });

      setJsonBoards({ ...jsonBoards, boards: updatedBoards });

      localStorage.setItem(
        "boards",
        JSON.stringify({ ...jsonBoards, boards: updatedBoards })
      );

      return updatedState;
    });
  };
  const handleCancelSubtasks = () => {
    setShowSubtasks((prev) => ({ ...prev, show: false }));
  };
  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedStatus = event.target.value;
    setShowSubtasks((prev) => ({
      ...prev,
      status: selectedStatus,
    }));
  };
  return (
    <>
      <div
        onClick={() => handleCancelSubtasks()}
        className="bg-[#000] fixed top-[6.4rem]  left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      <div
        className={`fixed px-[2rem] top-[20%]
       left-[4%] max-h-[70vh] overflow-y-scroll z-10 w-[34.3rem] bg-[white]  dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem]`}
      >
        <div className="flex justify-between items-center pb-[1rem]">
          <h2 className="text-[1.8rem] font-[700] mt-[1rem]">
            {showSubtasks?.taskTitle}
          </h2>
          <img src={Dots} alt="dots" />
        </div>
        <p className="font-[500] my-[1rem] leading-[2.3rem]  text-[1.3rem] text-[#828FA3] ">
          {showSubtasks.description}
        </p>
        <h3 className="text-[1.2rem] font-[700]  text-[#828FA3]">{`Subtasks(${filtered.length} of ${showSubtasks.subtasks.length}) `}</h3>
        <div className="flex flex-col gap-[1rem] my-[2rem]">
          {showSubtasks.subtasks.map((task, index) => (
            <div
              className="flex gap-[1rem] pl-[1.3rem] py-[1.8rem] rounded-[0.4rem] bg-lightBG"
              key={index}
              onClick={() => handleCheckboxChange(index)}
            >
              <input type="checkbox" checked={task.isCompleted} />
              <h3
                className={`text-[grey] text-[1.2rem] font-[700] opacity-[0.5] ${
                  task.isCompleted && "line-through"
                } `}
              >
                {task.title}
              </h3>
            </div>
          ))}
        </div>
        <div>
          <h3>Current Status</h3>
          <select
            id="tasks"
            name="tasks"
            value={showSubtasks.status}
            onChange={handleStatusChange}
          >
            {currentPage?.columns.map((col, index) => (
              <option
                key={index}
                value={col.name}
                selected={col.name === showSubtasks.status}
              >
                {col.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default Subtasks;
