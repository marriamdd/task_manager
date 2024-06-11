export interface ISubtask {
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  title: string;
  description: string;
  status: string;
  subtasks: ISubtask[];
}

export interface IColumn {
  name: string;
  tasks: ITask[];
}

export interface IBoard {
  name: string;
  columns: IColumn[];
}

export interface IData {
  boards: IBoard[];
}
