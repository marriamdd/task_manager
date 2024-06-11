import React, { useContext, useEffect } from "react";
import { Context } from "../App";

const ToggleMode: React.FC = () => {
  const { setDarkMode, darkMode } = useContext(Context);

  useEffect(() => {
    localStorage.setItem("mode", darkMode ? "dark" : "light");
  }, [darkMode]);
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "dark" : "light"}
    </div>
  );
};

export default ToggleMode;
