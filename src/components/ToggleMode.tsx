import { useEffect } from "react";

import Sun from "../assets/icon-light-theme.svg";
import Moon from "../assets/icon-dark-theme.svg";
import { useDarkMode } from "./DarkModeContext";
const ToggleMode: React.FC = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  useEffect(() => {
    localStorage.setItem("mode", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="w-[23.5rem] h-[4.8rem] rounded-md ml-[1rem] my-[1rem] bg-lightBG dark:bg-[#20212C] flex justify-center gap-[2rem] items-center md:mt-auto ">
      <img
        onClick={() => {
          setDarkMode(false);
        }}
        className="w-[2rem] cursor-pointer h-[2rem]"
        src={Sun}
        alt="sun_icon"
      />
      <div
        className="w-[4rem] h-[2rem] rounded-[1.2rem] cursor-pointer bg-purple flex flex-row items-center px-[0.5rem]"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <div
          className={`w-[1.4rem] h-[1.4rem] bg-white cursor-pointer rounded-xl ${
            darkMode ? "ml-[1.5rem] " : "ml-[0rem]"
          } transition-all duration-[1s] ease`}
        ></div>
      </div>
      <img
        onClick={() => {
          setDarkMode(true);
        }}
        className="w-[2rem] cursor-pointer h-[2rem]"
        src={Moon}
        alt="moon_icon"
      />
    </div>
  );
};

export default ToggleMode;
