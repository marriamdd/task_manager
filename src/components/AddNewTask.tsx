import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../App";

interface ITask {
  title: string;
  description: string;
  subtasks: string[];
}
export default function AddNewTask() {
  const { setShowAddNewTask, showAddNewTask } = useContext(Context);
  const { register, setValue, setError, control } = useForm<ITask>();
  if (!showAddNewTask) return;
  return (
    <div>
      <h2>Add New Task</h2>
      <form>
        <div className="flex flex-col gap-[0.5rem] ">
          <label htmlFor="title">Title</label>
          <input
            className="w-[29.5rem] h-[4rem] rounded-[4px] px-[1.6rem] border border-solid border-gray-400 border-opacity-25"
            id="title"
            type="text"
            placeholder="e.g. Take coffee break"
            {...register("title", {
              required: { value: true, message: "Can’t be empty" },
            })}
          />
        </div>
        <div className="flex flex-col gap-[0.5rem] ">
          <label htmlFor="description">Description</label>
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
      </form>
    </div>
  );
}
