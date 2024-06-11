import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./data.json";
import { IData } from "./dataTypes";

import BoardPage from "./pages/BoardPage";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

export interface IContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  jsonBoards: IData;
  setJsonBoards: React.Dispatch<React.SetStateAction<IData>>;
  showAllBoards: boolean;
  setShowAllBoards: React.Dispatch<React.SetStateAction<boolean>>;
  boardName: string;
  setBoardName: React.Dispatch<React.SetStateAction<string>>;
  showAddNewBoard: boolean;
  setShowAddNewBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<IContext>({
  darkMode: false,
  setDarkMode: () => {},
  jsonBoards: { boards: [] },
  setJsonBoards: () => {},
  showAllBoards: false,
  setShowAllBoards: () => {},
  boardName: "",
  setBoardName: () => {},
  showAddNewBoard: false,
  setShowAddNewBoard: () => {},
});

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );
  const [jsonBoards, setJsonBoards] = useState<IData>(Data);
  useEffect(() => {
    const localST = localStorage.getItem("boards");
    if (!localST) {
      localStorage.setItem("boards", JSON.stringify(jsonBoards));
    } else {
      const storage = JSON.parse(localST);
      setJsonBoards(storage);
    }
  }, [jsonBoards]);
  const [showAllBoards, setShowAllBoards] = useState(false);
  const [boardName, setBoardName] = useState("");
  const [showAddNewBoard, setShowAddNewBoard] = useState(false);

  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
        jsonBoards,
        setJsonBoards,
        showAllBoards,
        setShowAllBoards,
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
