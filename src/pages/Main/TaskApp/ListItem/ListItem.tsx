import classes from './ListItem.module.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Checkbox } from '@mui/material';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../../models/taskListModel';
import { EditTaskModal } from './EditTaskModal/EditTaskModal';

interface IProps {
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
  deleteTaskHandler: (id: string) => void;
  completeHandler: (id: string) => void;
  editTaskHandler: (id: string, updatedTask: string) => void;
}

export const ListItem = ({
  tasks,
  setTasks,
  deleteTaskHandler,
  completeHandler,
  editTaskHandler,
}: IProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<ITask | null>(null);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.listBox}>
      <Reorder.Group values={tasks} onReorder={setTasks}>
        {tasks.map((task) => (
          <Reorder.Item key={task.id} value={task}>
            <ul>
              <li className={classes.listItem}>
                <Checkbox
                  onClick={() => completeHandler(task.id)}
                  size="medium"
                  color="success"
                  checked={task.isCompleted}
                />
                <div className={`${task.isCompleted ? classes.completedTask : classes.text}`}>
                  {task.name}
                </div>
                <div className={classes.iconsBlock}>
                  <AiOutlineEdit
                    onClick={() => {
                      onOpen();
                      setEditTask(task);
                    }}
                    style={{ marginRight: 20 }}
                  />
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
      <EditTaskModal
        editTaskHandler={editTaskHandler}
        editTask={editTask}
        open={open}
        onClose={onClose}
      />
    </div>
  );
};
