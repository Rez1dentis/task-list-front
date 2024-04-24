import './Main.scss';
import { HiOutlinePlus } from 'react-icons/hi';
import { TaskApp } from './TaskApp/TaskApp';

export const Main = (): JSX.Element => {
  return (
    <div className="mainContainer">
      <div className="header">
        <div className="title">
          <text>Task List</text>
        </div>
        <div className="icon">
          <HiOutlinePlus style={{ width: 45, height: 45, color: 'white', cursor: 'pointer' }} />
        </div>
      </div>
      <div className="tasksContainer">
        <TaskApp />
      </div>
    </div>
  );
};
