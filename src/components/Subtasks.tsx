import React, { useContext } from "react";
import { Context } from "../App";
import Dots from "../assets/icon-vertical-ellipsis.svg";
function Subtasks() {
  const { showSubtasks } = useContext(Context);
  const filt = showSubtasks.subtasks.filter((item) => item.isCompleted == true);
  if (!showSubtasks.show) {
    return;
  }

  return (
    <div>
      <div>
        <h2>{showSubtasks?.taskTitle}</h2>
        <img src={Dots} alt="dots" />
      </div>
      <h3 className="text-[1.2rem] font-[700] text-[medium_Grey]">{`Subtasks(${filt.length} of ${showSubtasks.subtasks.length}) `}</h3>
    </div>
  );
}

export default Subtasks;
