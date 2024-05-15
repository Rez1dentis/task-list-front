import DarkModeToggle from 'react-dark-mode-toggle';
import { useTheme } from '../../../../app/hooks/useTheme';

export const DarkThemeToggle = (): JSX.Element => {
  const { isDark, toggleTheme } = useTheme();

  return <DarkModeToggle speed={3} onChange={toggleTheme} checked={isDark} size={60} />;
};
