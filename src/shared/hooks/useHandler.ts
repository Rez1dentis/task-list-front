import { useContext } from 'react';
import { TaskHandlerContext } from '../../store/context/TaskHandlerContext';

export const useHandler = () => {
  const context = useContext(TaskHandlerContext);

  if (!context) {
    throw new Error('Context TaskHandler error');
  }

  return context;
};
