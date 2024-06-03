import classes from './AddTaskForm.module.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { useTheme } from '../../../../shared/hooks/useTheme';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store/redux/store';
import { createTask } from '../../../../store/redux/slices/taskSlice';

export const AddTaskForm = (): JSX.Element => {
  const { isDark } = useTheme();

  const [inputValue, setInputValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(createTask(inputValue));
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
