import classes from './TaskApp.module.scss';
import { useState } from 'react';
import { ITask } from '../../../models/taskListModel';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { ListItem } from './ListItem/ListItem';

export const TaskApp = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
      <div className={classes.header}>
        <div className={classes.title}>Task List</div>
        <AddTaskForm createTaskHandler={createTaskHandler} />
      </div>
      <ListItem
        onClose={onClose}
        open={open}
        completeHandler={completeHandler}
        deleteTaskHandler={deleteTaskHandler}
        editTaskHandler={editTaskHandler}
        onOpen={onOpen}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
};
