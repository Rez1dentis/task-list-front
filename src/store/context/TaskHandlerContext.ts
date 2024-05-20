import { createContext } from 'react';
import { ITaskHandlerContext } from '../../models/taskHandlerContext';

export const TaskHandlerContext = createContext<ITaskHandlerContext | undefined>(undefined);
