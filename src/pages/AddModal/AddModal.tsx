import classes from './AddModal.module.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useState } from 'react';
import { ITask } from '../../models/taskListModel';
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute' as const,
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 150,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

interface IProps {
  open: boolean;
  onClose: () => void;
  tasks: ITask[];
  setTasks: Dispatch<SetStateAction<ITask[]>>;
}

export const AddModal = ({ open, onClose, tasks, setTasks }: IProps): JSX.Element => {
  const [inputValue, setinputValue] = useState<string>('');

  const addTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  const onSaveHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newTask: ITask = {
      id: uuidv4(),
      name: inputValue,
      isCompleted: false,
    };

    if (inputValue !== '') {
      setTasks([...tasks, newTask]);
    }

    setinputValue('');
  };

  return (
    <div className={classes.modalContainer}>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <TextField
            value={inputValue}
            onChange={addTaskHandler}
            className={classes.input}
            id="standard-basic"
            label="Введите название"
            variant="standard"
            fullWidth
          />
          <Button onClick={onSaveHandler} className={classes.saveButton} variant="outlined">
            Сохранить
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
