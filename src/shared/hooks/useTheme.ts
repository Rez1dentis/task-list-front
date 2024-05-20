import { useContext } from 'react';
import { ThemeContext } from '../../store/context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Context Theme error');
  }

  return context;
};
