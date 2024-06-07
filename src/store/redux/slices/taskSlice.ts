import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask, ITaskState } from '../../../models/taskListModel';
import { v4 as uuidv4 } from 'uuid';

const initialState: ITaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (state, action: PayloadAction<string>) => {
      const newTask: ITask = {
        id: uuidv4(),
        name: action.payload,
        isCompleted: false,
        date: new Date().toISOString(),
      };
      state.tasks = [...state.tasks, newTask].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    editTask: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const task = state.tasks.find((task) => task.id === action.payload.id);
      if (task) {
        task.name = action.payload.name;
      }
    },

    completeTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },

    reorderTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { createTask, deleteTask, editTask, completeTask, reorderTasks } = taskSlice.actions;
export default taskSlice.reducer;
