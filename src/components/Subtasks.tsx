import { useContext } from "react";
import { Context } from "../App";
import Dots from "../assets/icon-vertical-ellipsis.svg";

function Subtasks() {
  const { showSubtasks, setShowSubtasks, jsonBoards, setJsonBoards } =
    useContext(Context);

  if (!showSubtasks.show) {
    return null;
  }

  const filt = showSubtasks.subtasks.filter((item) => item.isCompleted);

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

      // Update local storage
      localStorage.setItem(
        "boards",
        JSON.stringify({ ...jsonBoards, boards: updatedBoards })
      );

      return updatedState;
    });
  };

  return (
    <div
      className={`fixed px-[2rem] top-[20%]
       left-[4%] max-h-[70vh] overflow-y-scroll z-10 w-[34.3rem] bg-contentLight  dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem]`}
    >
      <div className="flex justify-between items-center pb-[1rem]">
        <h2 className="text-[1.8rem] font-[700]">{showSubtasks?.taskTitle}</h2>
        <img src={Dots} alt="dots" />
      </div>
      <h3 className="text-[1.2rem] font-[700] text-[medium_Grey]">{`Subtasks(${filt.length} of ${showSubtasks.subtasks.length}) `}</h3>
      <div>
        {showSubtasks.subtasks.map((task, index) => (
          <div className="flex w-[29.5rem h-]" key={index}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => handleCheckboxChange(index)}
            />
            <h3>{task.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subtasks;
