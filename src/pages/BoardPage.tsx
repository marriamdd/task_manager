import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";

function BoardPage() {
  const { boardName } = useParams();
  console.log(boardName);
  const { setBoardName } = useContext(Context);
  if (boardName) {
    setBoardName(boardName);
  }

  return <div>BoardPage</div>;
}

export default BoardPage;
