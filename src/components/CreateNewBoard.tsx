import { useFieldArray, useForm, FieldValues } from "react-hook-form";
import Cross from "../assets/icon-cross.svg";
import { useContext, useEffect } from "react";
import { Context } from "../App";

interface Column {
  columnsName: string;
}

interface FormData extends FieldValues {
  name: string;
  columns: Column[];
}

function CreateNewBoard() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    defaultValues: {
      name: "",
      columns: [{ columnsName: "" }],
    },
  });

  const {
    setShowAddNewBoard,
    setShowHeaderDropdown,
    jsonBoards,
    setJsonBoards,
    setBoardName,
    showAddNewBoard,
    showEditBoard,
    setShowEditBoard,
    currentPage,
  } = useContext(Context);

  useEffect(() => {
    if (showAddNewBoard) {
      reset({
        name: "",
        columns: [{ columnsName: "" }],
      });
    }
    if (showEditBoard && currentPage) {
      setValue("name", currentPage.name);
      setValue(
        "columns",
        currentPage.columns.map((column) => ({ columnsName: column.name }))
      );
    }
  }, [showAddNewBoard, showEditBoard, currentPage, reset, setValue]);

  const onSubmit = (data: FormData) => {
    const newData = {
      name: data.name,
      columns: data.columns.map((column, index) => ({
        name: column.columnsName,
        tasks:
          showEditBoard && currentPage
            ? currentPage.columns[index]?.tasks || []
            : [],
      })),
    };

    let updatedBoards;

    if (showEditBoard && currentPage) {
      updatedBoards = {
        ...jsonBoards,
        boards: jsonBoards.boards.map((board) => {
          if (board.name === currentPage.name) {
            return { ...board, ...newData };
          }
          return board;
        }),
      };
    } else {
      updatedBoards = {
        ...jsonBoards,
        boards: [...jsonBoards.boards, newData],
      };
    }

    setJsonBoards(updatedBoards);
    localStorage.setItem("boards", JSON.stringify(updatedBoards));
    setShowAddNewBoard(false);
    setShowHeaderDropdown(false);
    setShowEditBoard(false);

    setBoardName(newData.name);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "columns",
  });

  return (
    <>
      <div
        onClick={() => {
          setShowAddNewBoard(false);
          setShowHeaderDropdown(false);
          setShowEditBoard(false);
        }}
        className="bg-[#000] fixed top-[6.4rem]  left-0 right-0 bottom-0 opacity-[0.5] z-10"
      ></div>
      <div
        className={`fixed  top-[20%]
           left-[4%] max-h-[70vh] overflow-y-scroll z-10 w-[34.3rem] bg-contentLight  dark:bg-contentDarkBG py-[1rem] rounded-[0.8rem]`}
      >
        <div className="flex flex-col gap-[2rem] py-[1rem] px-[2rem]">
          <h2 className="text-[1.8rem] font-[700]">
            {showEditBoard
              ? "Edit Board"
              : showAddNewBoard
              ? "Add New Board"
              : ""}
          </h2>
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
                  {Array.isArray(errors.columns) &&
                    errors.columns[index]?.columnsName && (
                      <p className="text-red-500 absolute right-[5rem]">
                        Can’t be empty
                      </p>
                    )}

                  <button
                    className="ml-[1rem]"
                    type="button"
                    onClick={() => remove(index)}
                    disabled={fields.length === 1}
                  >
                    <img src={Cross} alt="remove" />
                  </button>
                </div>
              ))}
            </div>

            <button
              className="text-[1.3rem] text-purple font-[700] mb-[2rem] w-[29.5rem] h-[4rem] rounded-[2rem] bg-light_purple"
              type="button"
              onClick={() => append({ columnsName: "" })}
            >
              + Add New Column
            </button>
            <button
              className="w-[29.5rem] h-[4rem] text-[1.3rem] text-[white] font-[700] rounded-[2rem] bg-purple"
              type="submit"
            >
              {showEditBoard
                ? "Save Changes"
                : showAddNewBoard
                ? "Create New Board"
                : ""}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateNewBoard;
