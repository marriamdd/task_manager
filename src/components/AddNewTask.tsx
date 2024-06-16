import { useContext } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { Context } from "../App";

import Cross from "../assets/icon-cross.svg";
interface ITask {
  title: string;
  description: string;
  subtasks: { subtaskName: string }[];
}
export default function AddNewTask() {
  const { showAddNewTask, showEditTask } = useContext(Context);

  const {
    register,
    // setValue,
    // setError,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITask>({
    mode: "all",
    defaultValues: {
      //   title: "",
      //   description: "",
      subtasks: [{ subtaskName: "" }],
    },
  });
  const { remove, append, fields } = useFieldArray({
    control,
    name: "subtasks",
  });
  const onSubmit = (data: ITask) => {
    console.log(data);
  };
  if (!showAddNewTask) return;
  return (
    <div className="px-[2rem]">
      <h2 className="text-[1.8rem] font-[700] my-[2rem]">
        {!showEditTask ? "Add New Task" : "Edit task"}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[1.5rem]"
      >
        <div className="flex flex-col gap-[0.5rem] ">
          <label className="text-medium_Grey my-[0.5rem]" htmlFor="title">
            Title
          </label>
          <input
            className="w-[29.5rem] h-[4rem] rounded-[4px] px-[1.6rem] border border-solid border-gray-400 border-opacity-25"
            id="title"
            type="text"
            placeholder="e.g. Take coffee break"
            {...register("title", {
              required: { value: true, message: "Can’t be empty" },
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="flex flex-col gap-[0.5rem] ">
          <label className="text-medium_Grey my-[0.5rem]" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            placeholder="e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little."
            className="w-[29.5rem] text-[1.3rem] leading-2.3rem] font-[500]  h-[11.5rem] text-wrap rounded-[4px] px-[1.6rem] pt-[1.5rem] border border-solid border-gray-400 border-opacity-25"
            {...register("description", {
              required: { value: true, message: "Can’t be empty" },
            })}
          ></textarea>
        </div>
        <div>
          {fields.map((item, index) => (
            <div key={index}>
              <input
                className="w-[29.5rem] h-[4rem] rounded-[4px] px-[1.6rem] border border-solid border-gray-400 border-opacity-25"
                id={`subtasks:${index}`}
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
                <img src={Cross} alt="remove" />
              </button>
              {errors.subtasks?.[index]?.subtaskName && (
                <p>{errors.subtasks[index]?.subtaskName?.message}</p>
              )}
            </div>
          ))}
        </div>
        <button
          className="text-[1.3rem] text-purple  font-[700] mb-[2rem] w-[29.5rem] h-[4rem] rounded-[2rem] bg-light_purple"
          type="button"
          onClick={() => append({ subtaskName: "" })}
        >
          + Add New Subtask
        </button>
        <button type="submit" className="button">
          Create Task
        </button>
      </form>
    </div>
  );
}
