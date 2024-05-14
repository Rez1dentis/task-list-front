import { TaskApp } from '../pages/Main/TaskApp/TaskApp';
import classes from './App.module.scss';

export const App = (): JSX.Element => {
  return (
    <div className={classes.mainContainer}>
      <TaskApp />
      <div className={classes.footer} />
    </div>
  );
};
