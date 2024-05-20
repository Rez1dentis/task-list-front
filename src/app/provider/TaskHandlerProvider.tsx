import { ReactNode, useState } from 'react';
import { TaskHandlerContext } from '../../store/context/TaskHandlerContext';
import { ITask } from '../../models/taskListModel';

interface IProps {
  children: ReactNode;
}

export const TaskHandlerProvider = ({ children }: IProps) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const createTaskHandler = (newTask: ITask) => {
    setTasks([...tasks, newTask].sort((a, b) => b.date.getTime() - a.date.getTime()));
  };

  const deleteTaskHandler = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTaskHandler = (id: string, updatedTask: string) => {
    const updatedTodos = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name: updatedTask };
      }
      return task;
    });

    setTasks(updatedTodos);
  };

  const completeHandler = (id: string) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(updatedTask);
  };

  return (
    <TaskHandlerContext.Provider
      value={{
        tasks,
        setTasks,
        createTaskHandler,
        deleteTaskHandler,
        editTaskHandler,
        completeHandler,
      }}
    >
      {children}
    </TaskHandlerContext.Provider>
  );
};
