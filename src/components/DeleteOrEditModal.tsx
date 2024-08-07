import { useContext, useEffect, useRef } from "react";
import { Context } from "../context/context";

interface DeleteOrEditModalProps {
  setOptions: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  showWhat: React.Dispatch<React.SetStateAction<boolean>>;
  deletewhat: string;
}

const DeleteOrEditModal: React.FC<DeleteOrEditModalProps> = ({
  setOptions,
  title,
  showWhat,
  deletewhat,
}) => {
  const {
    setShowDeleteUI,
    setShowDeleteTaskUI,
    setShowAddNewTask,
    setShowSubtasks,
  } = useContext(Context);

  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={optionsRef}
      style={{
        boxShadow: "0px 10px 20px 0px rgba(54, 78, 126, 0.25)",
        textWrap: "nowrap",
        borderRadius: "8px ",
        padding: "16px",
      }}
      className=" optionsDiv absolute top-[4.3rem] right-[-10px]  bg-contentLight"
    >
      <h2
        className="dark:text-[#828FA3] cursor-pointer"
        style={{
          fontWeight: " 500",
          fontSize: "13px",
          lineHeight: "23px",
          color: "rgb(130, 143, 163)",
          width: "160px",
        }}
        onClick={() => {
          showWhat(true);
          title == "Edit Task" ? setShowAddNewTask((prev) => !prev) : null;
          setShowSubtasks((prev) => ({ ...prev, show: false }));
          setOptions(false);
        }}
      >
        {title}
      </h2>
      <h2
        onClick={() => {
          if (title === "Edit Task") {
            setShowDeleteTaskUI(true);
            setOptions(false);
            setShowSubtasks((prev) => ({ ...prev, show: false }));
          } else if (title === "Edit Board") {
            setShowDeleteUI(true);
            setOptions(false);
            setShowSubtasks((prev) => ({ ...prev, show: false }));
          } else {
            setShowDeleteTaskUI(false);
            setShowDeleteUI(false);
            setOptions(false);
          }
        }}
        style={{
          fontWeight: " 500",
          fontSize: "13px",
          lineHeight: "23px",
          color: "rgb(234, 85, 85)",
          width: "160px",
          marginTop: "16px",
          cursor: "pointer",
        }}
      >
        {deletewhat}
      </h2>
    </div>
  );
};
export default DeleteOrEditModal;
