import classes from './TaskApp.module.scss';
// import { useState } from 'react';
// import { ITask } from '../../../models/taskListModel';
import { AddTaskForm } from './AddTaskForm/AddTaskForm';
import { ListItem } from './ListItem/ListItem';
import { DarkThemeToggle } from './DarkThemeToggle/DarkThemeToggle';
import { useTheme } from '../../../shared/hooks/useTheme';

export const TaskApp = (): JSX.Element => {
  const { isDark } = useTheme();

  return (
    <>
      <div className={classes.toggle}>
        <DarkThemeToggle />
      </div>
      <div className={`${classes.header} ${isDark ? classes.headerDark : ''}`}>
        <div className={classes.title}>Task List</div>
      </div>
      <AddTaskForm />
      <ListItem />
    </>
  );
};
