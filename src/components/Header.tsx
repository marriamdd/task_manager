import { useContext } from "react";
import { Context } from "../App";

function Header() {
  const { setShowAllBoards } = useContext(Context);
  return (
    <div
      onClick={() => setShowAllBoards((prev) => !prev)}
      className="w-[37.5rem] h-[6.4rem] bg-contentLight dark:contentDark "
    >
      Platform Launch
    </div>
  );
}

export default Header;
