import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";

function BoardPage() {
  const { boardName } = useParams();

  const { setBoardName, jsonBoards } = useContext(Context);
  if (boardName) {
    setBoardName(boardName);
  }
  console.log(boardName, "endpoint");
  const currentPage = jsonBoards.boards.find((item) => item.name === boardName);
  console.log(currentPage);
  return (
    <div className="flex  gap-[1rem] ">
      {currentPage?.columns.map((item, index) => (
        <div>
          <div>
            <h2>{`${currentPage?.columns[index].name} (${currentPage?.columns[index].name.length}) `}</h2>
          </div>
          {item.tasks.map((m) => (
            <div className="w-[28.8rem] px-[1.6rem] py-[2.3rem] mb-[1rem]  rounded-[0.8rem] bg-contentLight dark:bg-contentDarkBG">
              <p>{m.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BoardPage;
