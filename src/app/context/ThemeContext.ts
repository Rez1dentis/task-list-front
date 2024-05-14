import { createContext } from 'react';
import { IThemeContext } from '../../models/themeContext';

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);
