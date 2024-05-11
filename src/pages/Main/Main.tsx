import classes from './Main.module.scss';
import { TaskApp } from './TaskApp/TaskApp';

export const Main = (): JSX.Element => {
  return (
    <div className={classes.mainContainer}>
      <TaskApp />
      <div className={classes.footer} />
    </div>
  );
};
