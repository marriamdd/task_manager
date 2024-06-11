import { useContext } from "react";
import { Context } from "../App";
import ReactDOM from "react-dom";

function AllBoards() {
  const { showAllBoards } = useContext(Context);
  const portalContainer = document.getElementById("portal") as Element;
  if (!showAllBoards) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="relative">
      <div className="bg-[#000] fixed top-[6.4rem] left-0 right-0 bottom-0 opacity-[0.5] z-10"></div>
      <div className="fixed top-[50%] left-[50%]  z-10">all boards</div>
    </div>,
    portalContainer
  );
}

export default AllBoards;
