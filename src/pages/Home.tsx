import { useContext } from "react";
import { Context } from "../App";

function Home() {
  const { darkMode } = useContext(Context);
  console.log(darkMode);
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      Home
      <div className={"bg-lightBG dark:bg-darkBG"}>ragvac</div>
    </div>
  );
}

export default Home;
