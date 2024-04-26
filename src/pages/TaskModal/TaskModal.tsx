import classes from './TaskModal.module.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useEffect } from 'react';
import { ITask } from '../../models/taskListModel';

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
  inputValue: string;
  addTaskHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  onSaveHandler: (e: MouseEvent<HTMLButtonElement>) => void;
  editTask: ITask | null;
  setinputValue: Dispatch<SetStateAction<string>>;
}

export const TaskModal = ({
  open,
  onClose,
  inputValue,
  addTaskHandler,
  onSaveHandler,
  editTask,
  setinputValue,
}: IProps): JSX.Element => {
  useEffect(() => {
    if (editTask) {
      setinputValue(editTask.name);
    }
  }, [editTask]);

  return (
    <div className={classes.modalContainer}>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <TextField
            value={inputValue}
            onChange={addTaskHandler}
            className={classes.input}
            id="standard-basic"
            label={editTask ? '' : 'Введите название задачи'}
            variant="standard"
            fullWidth
          />
          <Button onClick={onSaveHandler} className={classes.saveButton} variant="outlined">
            {editTask ? 'Изменить' : 'Сохранить'}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
