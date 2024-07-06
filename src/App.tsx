import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./data.json";
import { Board, IData } from "./dataTypes";

import BoardPage from "./pages/BoardPage";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

export interface Subtask {
  title: string;
  isCompleted: boolean;
}

export interface IShowSubtasks {
  boardName: string;
  show: boolean;
  taskTitle: string;
  status: string;
  subtasks: Subtask[];
  description: string;
}

export interface IContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  jsonBoards: IData;
  setJsonBoards: React.Dispatch<React.SetStateAction<IData>>;
  showHeaderDropdown: boolean;
  setShowHeaderDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  currentBoardName: string;
  setCurrentBoardName: React.Dispatch<React.SetStateAction<string>>;
  showAddNewBoard: boolean;
  setShowAddNewBoard: React.Dispatch<React.SetStateAction<boolean>>;
  showEditBoard: boolean;
  setShowEditBoard: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: Board | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<Board | null>>;
  showAddNewTask: boolean;
  setShowAddNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  showEditTask: boolean;
  setShowEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  showSubtasks: IShowSubtasks;
  setShowSubtasks: React.Dispatch<React.SetStateAction<IShowSubtasks>>;
  showDeleteUI: boolean;
  setShowDeleteUI: React.Dispatch<React.SetStateAction<boolean>>;
}

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
  setShowSubtasks: () => {},
});

function App() {
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
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:boardName" element={<BoardPage />} />
          </Route>
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
