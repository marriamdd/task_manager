import { useContext } from "react";

import BeforeChooseBoard from "../components/BeforeChooseBoard";
import { Context } from "../context/context";

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
