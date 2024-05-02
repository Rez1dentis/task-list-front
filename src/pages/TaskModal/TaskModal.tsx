import classes from './TaskModal.module.scss';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { ChangeEvent, MouseEvent } from 'react';

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
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  editHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const TaskModal = ({
  open,
  onClose,
  inputValue,
  changeHandler,
  editHandler,
}: IProps): JSX.Element => {
  return (
    <div className={classes.modalContainer}>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <TextField
            value={inputValue}
            onChange={changeHandler}
            className={classes.input}
            id="standard-basic"
            variant="standard"
            fullWidth
          />
          <Button onClick={editHandler} className={classes.saveButton} variant="outlined">
            Изменить
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
