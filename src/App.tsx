import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import BoardPage from "./pages/BoardPage";
import Home from "./pages/Home";
import { createContext, useState } from "react";

export interface IContext {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Context = createContext<IContext>({
  darkMode: false,
  setDarkMode: () => {},
});
function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("mode") === "dark"
  );

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
    <Context.Provider value={{ darkMode, setDarkMode }}>
      <RouterProvider router={router} />;
    </Context.Provider>
  );
}

export default App;
