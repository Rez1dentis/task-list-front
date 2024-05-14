import classes from './App.module.scss';
import { TaskApp } from '../pages/Main/TaskApp/TaskApp';
import { useTheme } from './hooks/useTheme';

export const App = (): JSX.Element => {
  const { isDark } = useTheme();

  return (
    <div className={`${classes.mainContainer} ${isDark ? classes.mainContainerDark : ''}`}>
      <TaskApp />
      <div className={classes.footer} />
    </div>
  );
};
