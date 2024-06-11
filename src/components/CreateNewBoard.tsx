import { useFieldArray, useForm } from "react-hook-form";
import Cross from "../assets/icon-cross.svg";
function CreateNewBoard() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      columns: [{ columnsName: "" }],
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  return (
    <div className="flex flex-col gap-[2rem] py-[1rem] px-[2rem]">
      <h2 className="text-[1.8rem] font-[700]">Add New Board</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-[0.5rem] relative">
          <label className="text-medium_Grey" htmlFor="boardName">
            Board Name
          </label>
          <input
            className="w-[29.5rem] h-[4rem] rounded-[4px] px-[1rem] border border-solid border-gray-400 border-opacity-25"
            id="boardName"
            type="text"
            placeholder="e.g. Web Design"
            {...register("name", {
              required: { value: true, message: "Can’t be empty" },
            })}
          />
          {errors.name?.message && (
            <p className="text-red-500 absolute right-[4rem] top-[3rem]">
              {errors.name?.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-[0.7rem] my-[2rem]">
          <label className="text-medium_Grey" htmlFor="columnName">
            Board Columns
          </label>

          {fields.map((column, index) => (
            <div
              key={column.id}
              className="flex items-center gap-[0.5rem] relative"
            >
              <input
                className="w-[29.5rem] h-[4rem] rounded-[4px] px-[1rem] border border-solid border-gray-400 border-opacity-25"
                id={`columnName-${index}`}
                type="text"
                placeholder="e.g. Todo"
                {...register(`columns.${index}.columnsName`, {
                  required: { value: true, message: "Can’t be empty" },
                })}
              />
              {errors.columns?.[index]?.columnsName && (
                <p className="text-red-500 absolute right-[5rem]">
                  Can’t be empty
                </p>
              )}
              <button
                disabled={fields.length === 1}
                type="button"
                onClick={() => remove(index)}
              >
                <img src={Cross} alt="remove" />
              </button>
            </div>
          ))}
        </div>

        <button type="button" onClick={() => append({ columnsName: "" })}>
          Add Column
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateNewBoard;
