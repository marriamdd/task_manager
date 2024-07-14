import { createContext, useState, useEffect, ReactNode } from "react";
import Data from "../data.json";
import { IData, Board } from "../dataTypes";
import { IContext } from "./contextTypes";
import { IShowSubtasks } from "../App";

export const Context = createContext<IContext>({
  darkMode: false,
  setDarkMode: () => {},
  jsonBoards: { boards: [] },
  setJsonBoards: () => {},
  showHeaderDropdown: false,
  setShowHeaderDropdown: () => {},
  currentBoardName: "",
  setCurrentBoardName: () => {},
  showAddNewBoard: false,
  setShowAddNewBoard: () => {},
  showEditBoard: false,
  setShowEditBoard: () => {},
  currentPage: null,
  setCurrentPage: () => {},
  showAddNewTask: false,
  setShowAddNewTask: () => {},
  showEditTask: false,
  setShowEditTask: () => {},
  showDeleteUI: false,
  setShowDeleteUI: () => {},
  showSubtasks: {
    show: false,
    boardName: "",
    taskTitle: "",
    status: "",
    subtasks: [],
    description: "",
  },
  showDeleteTaskUI: false,
  setShowDeleteTaskUI: () => {},
  setShowSubtasks: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );
  const [jsonBoards, setJsonBoards] = useState<IData>(Data);

  const [showHeaderDropdown, setShowHeaderDropdown] = useState(false);
  const [currentBoardName, setCurrentBoardName] = useState("");
  const [showAddNewBoard, setShowAddNewBoard] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [currentPage, setCurrentPage] = useState<Board | null>(null);
  const [showAddNewTask, setShowAddNewTask] = useState(false);
  const [showEditTask, setShowEditTask] = useState(false);
  const [showDeleteUI, setShowDeleteUI] = useState(false);
  const [showDeleteTaskUI, setShowDeleteTaskUI] = useState(false);
  const [showSubtasks, setShowSubtasks] = useState<IShowSubtasks>({
    show: false,
    taskTitle: "",
    status: "",
    subtasks: [],
    boardName: "",
    description: "",
  });

  useEffect(() => {
    const localST = localStorage.getItem("boards");
    if (!localST) {
      localStorage.setItem("boards", JSON.stringify(jsonBoards));
    } else {
      const storage = JSON.parse(localST);
      setJsonBoards(storage);
    }
  }, [showEditBoard]);

  return (
    <Context.Provider
      value={{
        currentPage,
        setCurrentPage,
        showEditBoard,
        setShowEditBoard,
        darkMode,
        setDarkMode,
        jsonBoards,
        setJsonBoards,
        showHeaderDropdown,
        setShowHeaderDropdown,
        currentBoardName,
        setCurrentBoardName,
        showAddNewBoard,
        setShowAddNewBoard,
        showAddNewTask,
        setShowAddNewTask,
        showEditTask,
        setShowEditTask,
        showSubtasks,
        setShowSubtasks,
        showDeleteUI,
        setShowDeleteUI,
        showDeleteTaskUI,
        setShowDeleteTaskUI,
      }}
    >
      {children}
    </Context.Provider>
  );
};
