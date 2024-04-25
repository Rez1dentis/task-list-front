import classes from './Main.module.scss';
import { HiOutlinePlus } from 'react-icons/hi';
import { TaskApp } from './TaskApp/TaskApp';

export const Main = (): JSX.Element => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.header}>
        <div className={classes.title}>Task List</div>
        <div className={classes.icon}>
          <HiOutlinePlus style={{ width: 45, height: 45, color: 'white', cursor: 'pointer' }} />
        </div>
      </div>
      <div className={classes.tasksContainer}>
        <TaskApp />
      </div>
      <div className={classes.footer} />
    </div>
  );
};
