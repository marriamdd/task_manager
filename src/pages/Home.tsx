import { useContext } from "react";
import { Context } from "../App";
import BeforeChooseBoard from "../components/BeforeChooseBoard";

function Home() {
  const { currentBoardName } = useContext(Context);

  return (
    <div className="h-[100vh] dark:bg-bodyDarkBG ">
      <div className={"bg-lightBG dark:bg-contentDarkBG"}></div>
      {!currentBoardName && <BeforeChooseBoard />}
    </div>
  );
}

export default Home;
