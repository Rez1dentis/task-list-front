import classes from './TaskApp.module.scss';
import { useState } from 'react';
import { ITask } from '../../../models/taskListModel';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { ListItem } from './ListItem/ListItem';
import { EditTaskModal } from './EditTaskModal/EditTaskModal';

export const TaskApp = (): JSX.Element => {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>Task List</div>
        <AddTaskForm createTaskHandler={createTaskHandler} />
      </div>
      <ListItem
        deleteTaskHandler={deleteTaskHandler}
        onOpen={onOpen}
        tasks={tasks}
        setTasks={setTasks}
      />
      <EditTaskModal open={open} onClose={onClose} />
    </>
  );
};
