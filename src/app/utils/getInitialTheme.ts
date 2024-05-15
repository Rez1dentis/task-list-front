import { getSystemTheme } from './getSystemTheme';

export const getInitialTheme = (): boolean => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme !== null) {
    return savedTheme === 'dark';
  }
  return getSystemTheme();
};
