import { useContext, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Context } from "../context/context";
import Cross from "../assets/icon-cross.svg";
import { useParams } from "react-router-dom";

interface ITask {
  title: string;
  description: string;
  subtasks: { subtaskName: string }[];
  status: string;
}

export default function AddNewTask() {
  const {
    setShowAddNewTask,
    showAddNewTask,
    setShowEditTask,
    showEditTask,
    currentPage,
    showSubtasks,
  } = useContext(Context);

  const { boardName } = useParams();
  const fakeRefresh = () => {
    window.location.reload();
  };

  const {
    register,
    setValue,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITask>({
    mode: "all",
    defaultValues: {
      title: "",
      description: "",
      subtasks: [{ subtaskName: "" }],
      status: currentPage?.columns[0]?.name || "",
    },
  });

  const { remove, append, fields } = useFieldArray({
    control,
    name: "subtasks",
  });

  useEffect(() => {
    if (showAddNewTask) {
      reset({
        title: "",
        description: "",
        subtasks: [{ subtaskName: "" }],
        status: currentPage?.columns[0]?.name || "",
      });
    }
    if (showEditTask && currentPage && showSubtasks) {
      setValue("title", showSubtasks.taskTitle);
      setValue("description", showSubtasks.description);
      setValue(
        "subtasks",
        showSubtasks.subtasks.map((subtask) => ({
          subtaskName: subtask.title,
        }))
      );
      setValue("status", showSubtasks.status);
    }
  }, [
    currentPage,
    showAddNewTask,
    showEditTask,
    showSubtasks,
    reset,
    setValue,
  ]);

  const onSubmit = (data: ITask) => {
    const datastorage = localStorage.getItem("boards");

    if (datastorage) {
      const parsedData = JSON.parse(datastorage);
      const currentBoard = parsedData.boards.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (board: any) => board.name === boardName
      );

      if (currentBoard) {
        const currentColumn = currentBoard.columns.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (column: any) => column.name === data.status
        );

        if (currentColumn) {
          const newTask = {
            title: data.title,
            description: data.description,
            subtasks: data.subtasks.map((subtask) => ({
              title: subtask.subtaskName,
              isCompleted: false,
            })),
          };

          currentColumn.tasks.push(newTask);

          localStorage.setItem("boards", JSON.stringify(parsedData));
          setShowAddNewTask(false);
          setShowEditTask(false);
        }
      }
    }
    fakeRefresh();
  };

  if (!showAddNewTask) return null;

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue("status", event.target.value);
  };

  return (
    <>
      <div
        onClick={() => {
          setShowAddNewTask(false);
          setShowEditTask(false);
        }}
        className="bg-[#000] fixed top-0  left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      <div
        className={`fixed px-[2rem]  md:max-h-[675px]  md:w-[480px]  left-1/2 transform -translate-x-1/2 max-h-[659px]   z-10 w-[34.3rem] bg-contentLight dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem]`}
      >
        <h2 className="text-[1.8rem] font-[700] my-[2rem]">
          {!showEditTask ? "Add New Task" : "Edit Task"}
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[1.5rem]"
        >
          <div className="flex flex-col gap-[0.5rem]">
            <label className="text-medium_Grey my-[0.5rem] " htmlFor="title">
              Title
            </label>
            <input
              className="w-[29.5rem] h-[4rem] md:w-[416px] rounded-[4px] px-[1.6rem] border border-solid border-gray-400 border-opacity-25"
              id="title"
              type="text"
              placeholder="e.g. Take coffee break"
              {...register("title", {
                required: { value: true, message: "Can’t be empty" },
              })}
            />
            {errors.title && (
              <p
                style={{
                  color: "red",
                }}
              >
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-[0.5rem]">
            <label
              className="text-medium_Grey my-[0.5rem]"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
              className="w-[29.5rem] text-[1.3rem] md:w-[416px] leading-2.3rem font-[500] h-[11.5rem] text-wrap rounded-[4px] px-[1.6rem] pt-[1.5rem] border border-solid border-gray-400 border-opacity-25"
              {...register("description", {
                required: { value: true, message: "Can’t be empty" },
              })}
            ></textarea>
            {errors.description && (
              <p
                style={{
                  color: "red",
                }}
              >
                {errors.description.message}
              </p>
            )}
          </div>
          <label className="text-medium_Grey my-[0.5rem]" htmlFor="description">
            Subtasks
          </label>
          <div
            className=" max-h-[80px] overflow-y-auto"
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {fields.map((item, index) => (
              <div
                key={item.id}
                style={{ display: "flex", gap: ".5rem", position: "relative" }}
              >
                <input
                  className="w-[29.5rem] md:w-[416px] h-[4rem] rounded-[4px] px-[1.6rem] border border-solid border-gray-400 border-opacity-25"
                  id={`subtasks.${index}.subtaskName`}
                  type="text"
                  placeholder="e.g. Make coffee"
                  {...register(`subtasks.${index}.subtaskName`, {
                    required: { value: true, message: "Can’t be empty" },
                  })}
                />
                <button
                  className="ml-[1rem]"
                  type="button"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                >
                  <img className="cursor-pointer" src={Cross} alt="remove" />
                </button>
                {errors.subtasks?.[index]?.subtaskName && (
                  <p
                    style={{
                      position: "absolute",
                      right: "4rem",
                      top: "1.1rem",
                      color: "red",
                    }}
                  >
                    {errors.subtasks[index]?.subtaskName?.message}
                  </p>
                )}
              </div>
            ))}
          </div>
          <button
            className="text-[1.3rem] md:w-[416px] text-purple font-[700] mb-[2rem] w-[29.5rem] h-[4rem] rounded-[2rem] bg-light_purple dark:bg-purple dark:text-white"
            type="button"
            onClick={() => append({ subtaskName: "" })}
          >
            + Add New Subtask
          </button>
          <select
            style={{
              marginTop: "1rem",
              marginBottom: "2.5rem",

              height: "4rem",
              borderRadius: "0.4rem",
              border: "1px solid rgba(130, 143, 163, 0.25)",
            }}
            className="text-[1.3rem] w-[29.5rem] md:w-[416px] font-[500] px-[1rem]"
            id="tasks"
            name="tasks"
            // value={showSubtasks.status}
            onChange={handleStatusChange}
          >
            {currentPage?.columns.map((col, index) => (
              <option key={index} value={col.name}>
                {col.name}
              </option>
            ))}
          </select>
          <button style={{ height: "40px" }} type="submit" className="button">
            {showEditTask ? "Update Task" : "Create Task"}
          </button>
        </form>
      </div>
    </>
  );
}
