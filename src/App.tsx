import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BoardPage from "./pages/BoardPage";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";

import { ContextProvider } from "./context/context";
import { DarkModeProvider } from "./components/DarkModeContext";
import NotFound from "./pages/NotFound";

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

function App() {
  return (
    <ContextProvider>
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:boardName" element={<BoardPage />} />
              <Route path="/NotFound" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </DarkModeProvider>
    </ContextProvider>
  );
}

export default App;
