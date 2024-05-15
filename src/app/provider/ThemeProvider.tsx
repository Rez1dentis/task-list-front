import { ReactNode, useState, useEffect } from 'react';
import { ThemeContext } from '../../store/context/ThemeContext';
import { getInitialTheme } from '../../shared/utils/getInitialTheme';

interface IProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
  const [isDark, setIsDark] = useState<boolean>(getInitialTheme());

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const setRootElementClass = (isDark: boolean) => {
      const rootElement = document.getElementById('root');
      if (rootElement) {
        if (isDark) {
          rootElement.classList.add('dark');
        } else {
          rootElement.classList.remove('dark');
        }
      }
    };

    setRootElementClass(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
