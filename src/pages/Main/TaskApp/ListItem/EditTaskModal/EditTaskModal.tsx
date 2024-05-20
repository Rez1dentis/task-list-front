import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { ITask } from '../../../../../models/taskListModel';
import { useHandler } from '../../../../../shared/hooks/useHandler';

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
  isModalOpen: boolean;
  onClose: () => void;
  editTask: ITask | null;
}

export const EditTaskModal = ({ isModalOpen, onClose, editTask }: IProps): JSX.Element => {
  const { editTaskHandler } = useHandler();

  const [editValue, setEditValue] = useState<string>('');

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (editTask && editValue.trim() !== '') {
      editTaskHandler(editTask.id, editValue);
      onClose();
      setEditValue('');
    }
  };

  useEffect(() => {
    if (editTask) {
      setEditValue(editTask.name);
    }
  }, [editTask]);

  return (
    <Modal open={isModalOpen} onClose={onClose}>
      <Box sx={style}>
        <form onSubmit={submitHandler}>
          <TextField
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            id="standard-basic"
            variant="standard"
            fullWidth
          />
          <Button onClick={submitHandler} style={{ marginTop: 15 }} variant="outlined">
            Изменить
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
