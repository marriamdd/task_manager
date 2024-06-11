import { useContext } from "react";
import { Context } from "../App";

function Home() {
  const { darkMode } = useContext(Context);
  console.log(darkMode);
  return (
    <div className="h-[100vh] dark:bg-bodyDarkBG ">
      Home
      <div className={"bg-lightBG dark:bg-contentDarkBG"}>ragvac</div>
    </div>
  );
}

export default Home;
