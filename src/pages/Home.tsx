import { useContext } from "react";
import { Context } from "../App";
import BeforeChooseBoard from "../components/BeforeChooseBoard";

function Home() {
  const { boardName } = useContext(Context);

  return (
    <div className="h-[100vh] dark:bg-bodyDarkBG ">
      Home
      <div className={"bg-lightBG dark:bg-contentDarkBG"}>ragvac</div>
      {!boardName && <BeforeChooseBoard />}
    </div>
  );
}

export default Home;
