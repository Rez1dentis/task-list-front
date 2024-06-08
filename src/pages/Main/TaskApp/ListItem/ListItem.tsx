import classes from './ListItem.module.scss';
import { memo, useCallback, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Checkbox, IconButton } from '@mui/material';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../../models/taskListModel';
import { EditTaskModal } from './EditTaskModal/EditTaskModal';
import { useTheme } from '../../../../shared/hooks/useTheme';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/redux/store';
import { completeTask, deleteTask, reorderTasks } from '../../../../store/redux/slices/taskSlice';

export const ListItem = memo((): JSX.Element => {
  const { isDark } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editedTask, setEditedTask] = useState<ITask | null>(null);

  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const onOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleReorder = (newTask: ITask[]) => {
    dispatch(reorderTasks(newTask));
  };

  return (
    <div className={classes.listBox}>
      {tasks.length === 0 ? (
        <div className={`${classes.noTaskText} ${isDark ? classes.noTaskTextDark : ''}`}>
          Нет задач
        </div>
      ) : (
        <Reorder.Group values={tasks} onReorder={handleReorder}>
          {tasks.map((task) => (
            <Reorder.Item key={task.id} value={task}>
              <ul>
                <li className={classes.listItem}>
                  <Checkbox
                    onClick={() => dispatch(completeTask(task.id))}
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
                        setEditedTask(task);
                      }}
                    >
                      <AiOutlineEdit />
                    </IconButton>
                    <IconButton color="inherit" onClick={() => dispatch(deleteTask(task.id))}>
                      <RiDeleteBinLine style={{ width: 23, height: 23 }} />
                    </IconButton>
                  </div>
                </li>
              </ul>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}

      <EditTaskModal editedTask={editedTask} isModalOpen={isModalOpen} onClose={onClose} />
    </div>
  );
});

ListItem.displayName = 'ListItem';
