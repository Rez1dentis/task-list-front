import { ITask, ITaskState } from '../../../models/taskListModel';
import taskReducer, {
  createTask,
  deleteTask,
  editTask,
  completeTask,
  reorderTasks,
} from './taskSlice';

describe('taskSlice', () => {
  const initialState: ITaskState = {
    tasks: [],
  };

  it('should handle initial state', () => {
    const unknownAction = { type: 'unknown' };

    const state = taskReducer(undefined, unknownAction);

    expect(state).toEqual(initialState);
  });

  it('should handle createTask', () => {
    const action = createTask('New Task');

    const state = taskReducer(initialState, action);

    expect(state.tasks.length).toBe(1);
    expect(state.tasks[0].name).toBe('New Task');
  });

  it('should handle deleteTask', () => {
    const initialStateWithTasks: ITaskState = {
      tasks: [{ id: '1', name: 'Task 1', isCompleted: false, date: new Date().toISOString() }],
    };

    const action = deleteTask('1');

    const state = taskReducer(initialStateWithTasks, action);

    expect(state.tasks.length).toBe(0);
  });

  it('should handle editTask', () => {
    const initialStateWithTasks: ITaskState = {
      tasks: [{ id: '1', name: 'Task 1', isCompleted: false, date: new Date().toISOString() }],
    };

    const action = editTask({ id: '1', name: 'Updated Task 1' });

    const state = taskReducer(initialStateWithTasks, action);

    expect(state.tasks[0].name).toBe('Updated Task 1');
  });

  it('should handle completeTask', () => {
    const initialStateWithTasks: ITaskState = {
      tasks: [{ id: '1', name: 'Task 1', isCompleted: false, date: new Date().toISOString() }],
    };
    const action = completeTask('1');

    const state = taskReducer(initialStateWithTasks, action);

    expect(state.tasks[0].isCompleted).toBe(true);
  });

  it('should handle reorderTasks', () => {
    const initialStateWithTasks: ITaskState = {
      tasks: [
        { id: '1', name: 'Task 1', isCompleted: false, date: new Date().toISOString() },
        { id: '2', name: 'Task 2', isCompleted: false, date: new Date().toISOString() },
      ],
    };

    const reorderedTasks: ITask[] = [
      { id: '2', name: 'Task 2', isCompleted: false, date: new Date().toISOString() },
      { id: '1', name: 'Task 1', isCompleted: false, date: new Date().toISOString() },
    ];

    const action = reorderTasks(reorderedTasks);

    const state = taskReducer(initialStateWithTasks, action);

    expect(state.tasks[0].id).toBe('2');
    expect(state.tasks[1].id).toBe('1');
  });
});
