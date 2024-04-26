import classes from './TaskApp.module.scss';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../models/taskListModel';
import { HiOutlinePlus } from 'react-icons/hi';
import { tasksData } from './mockData';
import { TaskModal } from '../../TaskModal/TaskModal';

export const TaskApp = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>(tasksData);

  const addModalOpen = () => setOpen(true);
  const addModalClose = () => setOpen(false);

  const deleteTaskHandler = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>Task List</div>
        <div className={classes.icon}>
          <HiOutlinePlus
            onClick={addModalOpen}
            style={{ width: 45, height: 45, color: 'white', cursor: 'pointer' }}
          />
        </div>
      </div>
      <Reorder.Group values={tasks} onReorder={setTasks}>
        {tasks.map((task) => (
          <Reorder.Item key={task.id} value={task}>
            <ul>
              <li className={classes.listItem}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox checked={task.isCompleted} color="success" />}
                    label=""
                  />
                </FormGroup>
                <div className={classes.text}>{task.name}</div>
                <div className={classes.iconsBlock}>
                  <CiEdit style={{ marginRight: 15 }} />
                  <TiDeleteOutline onClick={() => deleteTaskHandler(task.id)} />
                </div>
              </li>
            </ul>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <TaskModal setTasks={setTasks} tasks={tasks} open={open} onClose={addModalClose} />
    </>
  );
};
