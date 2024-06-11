import { useContext } from "react";
import { Context } from "../App";

function Header() {
  const { setShowAllBoards, setShowAddNewBoard } = useContext(Context);
  return (
    <div
      onClick={() => {
        setShowAllBoards((prev) => !prev);
        setShowAddNewBoard(false);
      }}
      className="w-[37.5rem] h-[6.4rem] bg-contentLight dark:bg-contentDark "
    >
      Platform Launch
    </div>
  );
}

export default Header;
