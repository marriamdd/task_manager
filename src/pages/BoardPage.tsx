import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";

function BoardPage() {
  const { boardName } = useParams();
  const colors = [
    "#49C4E5",
    "#8471F2",
    "#67E2AE",
    "#FF8C00",
    "#4B0082",
    "#FF1493",
    "#DAA520",
    "#00FA9A",
    "#FF6347",
    "#00BFFF",
    "#8B0000",
    "#6A5ACD",
    "#2E8B57",
    "#FFD700",
    "#F08080",
    "#778899",
    "#B22222",
    "#008080",
    "#FFA07A",
    "#FF00FF",
  ];
  const { setBoardName, jsonBoards } = useContext(Context);
  if (boardName) {
    setBoardName(boardName);
  }

  const currentPage = jsonBoards.boards.find((item) => item.name === boardName);

  console.log(currentPage);
  return (
    <>
      <div className="scrollbar flex gap-[2rem] px-[1.5rem] py-[2rem] w-full overflow-x-scroll ">
        {currentPage?.columns.map((item, index) => (
          <div>
            <div className="flex  gap-[0.5rem]">
              <div
                style={{
                  marginTop: "1rem",
                  backgroundColor: colors[index],
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                }}
              ></div>
              <h2 className="text-medium_Grey text-[1.8rem] w-[28rem] pb-[1rem]">{`${currentPage?.columns[index]?.name} (${currentPage?.columns[index]?.tasks.length}) `}</h2>
            </div>
            {item.tasks.map((m) => (
              <div className=" cursor-pointer w-[28.8rem] px-[1.6rem] py-[2.3rem] mb-[1rem]  rounded-[0.8rem] bg-contentLight dark:bg-contentDarkBG">
                <p>{m.title}</p>
              </div>
            ))}
          </div>
        ))}

        <div className=" flex justify-center items-center">
          <h2 className="text-medium_Grey text-[2.4rem] cursor-pointer hover:text-purple  font-[700] w-[28.8rem] h-[6.1rem] bg-contentLight  text-center py-[1.2rem] rounded-[0.8rem]">
            + New Column
          </h2>
        </div>
      </div>
    </>
  );
}

export default BoardPage;
