import { useContext } from 'react';
import { ThemeContext } from '../../store/context/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('context error');
  }

  return context;
};
