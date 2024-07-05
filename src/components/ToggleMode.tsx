import { useContext, useEffect } from "react";
import { Context } from "../App";
import Sun from "../assets/icon-light-theme.svg";
import Moon from "../assets/icon-dark-theme.svg";
const ToggleMode: React.FC = () => {
  const { setDarkMode, darkMode } = useContext(Context);

  useEffect(() => {
    localStorage.setItem("mode", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="w-[23.5rem] h-[4.8rem] rounded-md ml-[1rem] my-[1rem] bg-lightBG dark:bg-bodyDarkBG flex justify-center gap-[2rem] items-center ">
      <img className="w-[2rem] h-[2rem]" src={Sun} alt="sun_icon" />
      <div
        className="w-[4rem] h-[2rem] rounded-[1.2rem] bg-purple flex flex-row items-center px-[0.5rem]"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        <div
          className={`w-[1.4rem] h-[1.4rem] bg-white rounded-xl ${
            darkMode ? "ml-[1.5rem] " : "ml-[0rem]"
          } transition-all duration-500 ease`}
        ></div>
      </div>
      <img className="w-[2rem] h-[2rem]" src={Moon} alt="moon_icon" />
    </div>
  );
};

export default ToggleMode;
