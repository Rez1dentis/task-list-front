import classes from './ListItem.module.scss';
import { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Checkbox, IconButton } from '@mui/material';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../../models/taskListModel';
import { EditTaskModal } from './EditTaskModal/EditTaskModal';
import { useTheme } from '../../../../shared/hooks/useTheme';
import { useHandler } from '../../../../shared/hooks/useHandler';

export const ListItem = (): JSX.Element => {
  const { isDark } = useTheme();

  const { tasks, setTasks, completeHandler, deleteTaskHandler } = useHandler();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<ITask | null>(null);

  const onOpen = () => {
    setIsModalOpen(true);
  };
  const onClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.listBox}>
      {tasks.length === 0 ? (
        <div className={`${classes.noTaskText} ${isDark ? classes.noTaskTextDark : ''}`}>
          Нет задач
        </div>
      ) : (
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
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        onOpen();
                        setEditTask(task);
                      }}
                    >
                      <AiOutlineEdit />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => deleteTaskHandler(task.id)}>
                      <RiDeleteBinLine style={{ width: 23, height: 23 }} />
                    </IconButton>
                  </div>
                </li>
              </ul>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}

      <EditTaskModal editTask={editTask} isModalOpen={isModalOpen} onClose={onClose} />
    </div>
  );
};
