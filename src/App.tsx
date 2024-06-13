import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./data.json";
import { Board, IData } from "./dataTypes";

import BoardPage from "./pages/BoardPage";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

export interface IContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  jsonBoards: IData;
  setJsonBoards: React.Dispatch<React.SetStateAction<IData>>;
  showHeaderDropdown: boolean;
  setShowHeaderDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  boardName: string;
  setBoardName: React.Dispatch<React.SetStateAction<string>>;
  showAddNewBoard: boolean;
  setShowAddNewBoard: React.Dispatch<React.SetStateAction<boolean>>;
  showEditBoard: boolean;
  setShowEditBoard: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: Board | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<Board | null>>;
}

export const Context = createContext<IContext>({
  darkMode: false,
  setDarkMode: () => {},
  jsonBoards: { boards: [] },
  setJsonBoards: () => {},
  showHeaderDropdown: false,
  setShowHeaderDropdown: () => {},
  boardName: "",
  setBoardName: () => {},
  showAddNewBoard: false,
  setShowAddNewBoard: () => {},
  showEditBoard: false,
  setShowEditBoard: () => {},
  currentPage: null,
  setCurrentPage: () => {},
});

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );
  const [jsonBoards, setJsonBoards] = useState<IData>(Data);

  const [showHeaderDropdown, setShowHeaderDropdown] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [showAddNewBoard, setShowAddNewBoard] = useState(false);
  const [showEditBoard, setShowEditBoard] = useState(false);
  const [currentPage, setCurrentPage] = useState<Board | null>(null);
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
        boardName,
        setBoardName,
        showAddNewBoard,
        setShowAddNewBoard,
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
