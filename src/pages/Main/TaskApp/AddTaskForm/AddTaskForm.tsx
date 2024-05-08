import { v4 as uuidv4 } from 'uuid';
import classes from './AddTaskForm.module.scss';
import { useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { ITask } from '../../../../models/taskListModel';

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
      <HiOutlinePlus
        onClick={submitHandler}
        style={{ width: 45, height: 45, color: 'white', cursor: 'pointer' }}
      />
    </form>
  );
};
