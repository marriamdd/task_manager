import { IShowSubtasks } from "../App";
import { Board, IData } from "../dataTypes";

export interface IContext {
  jsonBoards: IData;
  setJsonBoards: React.Dispatch<React.SetStateAction<IData>>;
  showHeaderDropdown: boolean;
  setShowHeaderDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  currentBoardName: string;
  setCurrentBoardName: React.Dispatch<React.SetStateAction<string>>;
  showAddNewBoard: boolean;
  setShowAddNewBoard: React.Dispatch<React.SetStateAction<boolean>>;
  showEditBoard: boolean;
  setShowEditBoard: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: Board | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<Board | null>>;
  showAddNewTask: boolean;
  setShowAddNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  showEditTask: boolean;
  setShowEditTask: React.Dispatch<React.SetStateAction<boolean>>;
  showSubtasks: IShowSubtasks;
  setShowSubtasks: React.Dispatch<React.SetStateAction<IShowSubtasks>>;
  showDeleteUI: boolean;
  setShowDeleteUI: React.Dispatch<React.SetStateAction<boolean>>;
  showDeleteTaskUI: boolean;
  setShowDeleteTaskUI: React.Dispatch<React.SetStateAction<boolean>>;
}
