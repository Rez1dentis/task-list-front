import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { ChangeEvent, MouseEvent } from 'react';

const style = {
  position: 'absolute' as const,
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 650,
  height: 150,
  bgcolor: 'background.paper',
  border: '2px solid #e26bec',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

interface IProps {
  open: boolean;
  onClose: () => void;
  inputValue: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  editTaskHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const EditTaskModal = ({
  open,
  onClose,
  inputValue,
  changeHandler,
  editTaskHandler,
}: IProps): JSX.Element => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <TextField
            value={inputValue}
            onChange={changeHandler}
            id="standard-basic"
            variant="standard"
            fullWidth
          />
          <Button style={{ marginTop: 15 }} onClick={editTaskHandler} variant="outlined">
            Изменить
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
