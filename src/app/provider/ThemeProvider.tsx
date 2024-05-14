import { ReactNode, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface IProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      if (isDark) {
        rootElement.classList.add('dark');
      } else {
        rootElement.classList.remove('dark');
      }
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
