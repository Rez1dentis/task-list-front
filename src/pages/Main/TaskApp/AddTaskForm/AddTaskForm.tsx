import classes from './AddTaskForm.module.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '../../../../shared/hooks/useTheme';
import { useHandler } from '../../../../shared/hooks/useHandler';

export const AddTaskForm = (): JSX.Element => {
  const { isDark } = useTheme();

  const { createTaskHandler } = useHandler();

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
        <AddCircleOutlineIcon
          sx={{ width: 35, height: 35, color: isDark ? 'aliceblue' : '#7685da' }}
        />
      </IconButton>
    </form>
  );
};
