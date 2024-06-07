export interface ITask {
  id: string;
  name: string;
  isCompleted: boolean;
  date: string;
}

export interface ITaskState {
  tasks: ITask[];
}
