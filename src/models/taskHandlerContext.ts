import { Dispatch, SetStateAction } from 'react';
import { ITask } from './taskListModel';

export interface ITaskHandlerContext {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  createTaskHandler: (newTask: ITask) => void;
  deleteTaskHandler: (id: string) => void;
  completeHandler: (id: string) => void;
  editTaskHandler: (id: string, updatedTask: string) => void;
}
