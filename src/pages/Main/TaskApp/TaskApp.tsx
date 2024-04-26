import classes from './TaskApp.module.scss';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { ChangeEvent, MouseEvent, useState } from 'react';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../models/taskListModel';
import { HiOutlinePlus } from 'react-icons/hi';
import { tasksData } from './mockData';
import { TaskModal } from '../../TaskModal/TaskModal';
import { v4 as uuidv4 } from 'uuid';

export const TaskApp = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>(tasksData);
  const [inputValue, setinputValue] = useState<string>('');
  const [editTask, setEditTask] = useState<ITask | null>(null);

  const isOpenModal = (task: ITask | null = null) => {
    setOpen(true);
    setEditTask(task);
  };
  const isCloseModal = () => setOpen(false);

  const addTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const deleteTaskHandler = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onSaveHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (editTask) {
      setTasks(
        tasks.map((task) => {
          if (task.id === editTask.id) {
            return { ...task, name: inputValue };
          }
          return task;
        }),
      );
    } else {
      const newTask: ITask = {
        id: uuidv4(),
        name: inputValue,
        isCompleted: false,
      };

      if (inputValue.trim() !== '') {
        setTasks([...tasks, newTask]);
      }
    }

    setinputValue('');
    isCloseModal();
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>Task List</div>
        <div className={classes.icon}>
          <HiOutlinePlus
            onClick={() => isOpenModal()}
            style={{ width: 45, height: 45, color: 'white', cursor: 'pointer' }}
          />
        </div>
      </div>
      <div className={classes.listBox}>
      <Reorder.Group values={tasks} onReorder={setTasks}>
        {tasks.map((task) => (
          <Reorder.Item key={task.id} value={task}>
            <ul>
              <li className={classes.listItem}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox sx={{ color: "aliceblue" }} size='large' defaultChecked />}
                    label=""
                  />
                </FormGroup>
                <div className={classes.text}>{task.name}</div>
                <div className={classes.iconsBlock}>
                  <CiEdit onClick={() => isOpenModal(task)} style={{ marginRight: 15 }} />
                  <TiDeleteOutline onClick={() => deleteTaskHandler(task.id)} />
                </div>
              </li>
            </ul>
          </Reorder.Item>
        ))}
      </Reorder.Group>
      </div>
      <TaskModal
        setinputValue={setinputValue}
        editTask={editTask}
        addTaskHandler={addTaskHandler}
        onSaveHandler={onSaveHandler}
        inputValue={inputValue}
        open={open}
        onClose={isCloseModal}
      />
    </>
  );
};
