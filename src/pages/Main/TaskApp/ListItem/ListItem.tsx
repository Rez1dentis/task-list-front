import classes from './ListItem.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Checkbox } from '@mui/material';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../../models/taskListModel';

interface IProps {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  onOpen: () => void;
  deleteTaskHandler: (id: string) => void;
}

export const ListItem = ({ tasks, setTasks, onOpen, deleteTaskHandler }: IProps): JSX.Element => {
  return (
    <div className={classes.listBox}>
      <Reorder.Group values={tasks} onReorder={setTasks}>
        {tasks.map((task) => (
          <Reorder.Item key={task.id} value={task}>
            <ul>
              <li className={classes.listItem}>
                <Checkbox size="medium" color="success" checked={task.isCompleted} />
                <div className={`${task.isCompleted ? classes.completedTask : classes.text}`}>
                  {task.name}
                </div>
                <div className={classes.iconsBlock}>
                  <AiOutlineEdit onClick={() => onOpen()} style={{ marginRight: 20 }} />
                  <RiDeleteBinLine
                    onClick={() => deleteTaskHandler(task.id)}
                    style={{ width: 23, height: 23 }}
                  />
                </div>
              </li>
            </ul>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};
