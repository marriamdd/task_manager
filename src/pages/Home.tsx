import { useContext } from "react";
import { Context } from "../App";
import ToggleMode from "../components/ToggleMode";

function Home() {
  const { darkMode } = useContext(Context);
  console.log(darkMode);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      Home
      <div className={"dark:bg-darkBG"}>ragvac</div>
      <ToggleMode />
    </div>
  );
}

export default Home;
