import classes from './TaskApp.module.scss';
import { useState } from 'react';
import { ITask } from '../../../models/taskListModel';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { ListItem } from './ListItem/ListItem';
import { DarkThemeToggle } from './DarkThemeToggle/DarkThemeToggle';
import { useTheme } from '../../../app/hooks/useTheme';

export const TaskApp = (): JSX.Element => {
  const { isDark } = useTheme();

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
    <>
      <div className={classes.toggle}>
        <DarkThemeToggle />
      </div>
      <div className={`${classes.header} ${isDark ? classes.headerDark : ''}`}>
        <div className={classes.title}>Task List</div>
      </div>
      <AddTaskForm createTaskHandler={createTaskHandler} />
      <ListItem
        completeHandler={completeHandler}
        deleteTaskHandler={deleteTaskHandler}
        editTaskHandler={editTaskHandler}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
};
