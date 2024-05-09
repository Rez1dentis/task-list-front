import { observer } from 'mobx-react-lite';
import classes from './Main.module.scss';
import { TaskApp } from './TaskApp/TaskApp';

export const Main = observer((): JSX.Element => {

  return (
    <div className={classes.mainContainer}>
      <TaskApp />
      <div className={classes.footer} />
    </div>
  );
});
