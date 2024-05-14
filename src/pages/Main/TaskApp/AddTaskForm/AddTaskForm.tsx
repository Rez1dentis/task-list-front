import classes from './AddTaskForm.module.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { ITask } from '../../../../models/taskListModel';
import { IconButton } from '@mui/material';

interface IProps {
  createTaskHandler: (newTask: ITask) => void;
}

export const AddTaskForm = ({ createTaskHandler }: IProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>('');

  const submitHandler = (e: any) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      name: inputValue,
      isCompleted: false,
      date: new Date(),
    };

    if (inputValue.trim() !== '') {
      createTaskHandler(newTask);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={submitHandler} className={classes.addContainer}>
      <div className={classes.inputWrapper}>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className={classes.input}
          placeholder="Введите задачу"
          type="text"
        />
      </div>
      <IconButton onClick={submitHandler}>
        <AddCircleOutlineIcon sx={{ width: 38, height: 38, color: '#232946' }} />
      </IconButton>
    </form>
  );
};
