import classes from './TaskApp.module.scss';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Checkbox } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { Reorder } from 'framer-motion';
import { ITask } from '../../../models/taskListModel';
import { HiOutlinePlus } from 'react-icons/hi';
import { EditTaskModal } from '../../EditTaskModal/EditTaskModal';
import { v4 as uuidv4 } from 'uuid';

export const TaskApp = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setinputValue] = useState<string>('');
  const [editTask, setEditTask] = useState<ITask | null>(null);

  const noEmptyField = inputValue.trim() !== '';

  const isOpenModal = (task: ITask | null = null) => {
    setOpen(true);
    setEditTask(task);
  };
  const isCloseModal = () => setOpen(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const addTaskHandler = (e: any) => {
    e.preventDefault();

    const newTask: ITask = {
      id: uuidv4(),
      name: inputValue,
      isCompleted: false,
      date: new Date(),
    };

    if (noEmptyField) {
      setTasks([...tasks, newTask].sort((a, b) => b.date.getTime() - a.date.getTime()));
      setinputValue('');
    }
  };

  const editTaskHandler = () => {
    if (editTask && noEmptyField) {
      setTasks(
        tasks.map((task) => {
          if (task.id === editTask.id) {
            return { ...task, name: inputValue };
          }
          return task;
        }),
      );
      isCloseModal();
    }
    setinputValue('');
  };

  const completedHandler = (id: string) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(updatedTask);
  };

  const deleteTaskHandler = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    if (editTask) {
      setinputValue(editTask.name);
    }
  }, [editTask]);

  return (
    <>
      <div className={classes.header}>
        <div className={classes.title}>Task List</div>
        <div className={classes.addContainer}>
          <div className={classes.inputWrapper}>
            <input
              value={inputValue}
              className={classes.input}
              onChange={changeHandler}
              placeholder="Введите задачу"
              type="text"
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTaskHandler(e);
              }}
            />
          </div>
          <HiOutlinePlus
            onClick={addTaskHandler}
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
                  <Checkbox
                    onClick={() => completedHandler(task.id)}
                    size="medium"
                    color="success"
                    checked={task.isCompleted}
                  />
                  <div className={`${task.isCompleted ? classes.completedTask : classes.text}`}>
                    {task.name}
                  </div>
                  <div className={classes.iconsBlock}>
                    <AiOutlineEdit onClick={() => isOpenModal(task)} style={{ marginRight: 20 }} />
                    <RiDeleteBinLine
                      style={{ width: 23, height: 23 }}
                      onClick={() => deleteTaskHandler(task.id)}
                    />
                  </div>
                </li>
              </ul>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
      <EditTaskModal
        editTaskHandler={editTaskHandler}
        changeHandler={changeHandler}
        inputValue={inputValue}
        open={open}
        onClose={isCloseModal}
      />
    </>
  );
};
