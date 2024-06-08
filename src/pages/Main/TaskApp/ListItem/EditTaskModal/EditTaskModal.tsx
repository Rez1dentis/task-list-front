import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button, TextField } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { ITask } from '../../../../../models/taskListModel';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../store/redux/store';
import { editTask } from '../../../../../store/redux/slices/taskSlice';

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
  editedTask: ITask | null;
}

export const EditTaskModal = memo(({ isModalOpen, onClose, editedTask }: IProps): JSX.Element => {
  const [editValue, setEditValue] = useState<string>('');

  const dispatch = useDispatch<AppDispatch>();

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (editedTask && editValue.trim() !== '') {
      dispatch(editTask({ id: editedTask.id, name: editValue }));
      onClose();
      setEditValue('');
    }
  };

  useEffect(() => {
    if (editedTask) {
      setEditValue(editedTask.name);
    }
  }, [editedTask]);

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
});

EditTaskModal.displayName = 'EditTaskModal';
