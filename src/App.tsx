import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BoardPage from "./pages/BoardPage";
import Home from "./pages/Home";
import { createContext, useState } from "react";
import Data from "./data.json";
import { IData } from "./dataTypes";
import Header from "./components/Header";
import AllBoards from "./components/AllBoardsModal";

export interface IContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  jsonBoards: IData[];
  setJsonBoards: React.Dispatch<React.SetStateAction<IData[]>>;
  showAllBoards: boolean;
  setShowAllBoards: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Context = createContext<IContext>({
  darkMode: false,
  setDarkMode: () => {},
  jsonBoards: [],
  setJsonBoards: () => {},
  showAllBoards: false,
  setShowAllBoards: () => {},
});
function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );
  const [jsonBoards, setJsonBoards] = useState<IData[]>([Data]);
  const [showAllBoards, setShowAllBoards] = useState(false);
  console.log(jsonBoards);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: `/:boardName`,
      element: <BoardPage />,
    },
  ]);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
        jsonBoards,
        setJsonBoards,
        showAllBoards,
        setShowAllBoards,
      }}
    >
      <Header />
      <AllBoards />
      <RouterProvider router={router} />;
    </Context.Provider>
  );
}

export default App;
