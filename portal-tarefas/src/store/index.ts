import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/tasksSlice';

export const store = configureStore({
    reducer: {
        taskReducer: taskSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch
export * from './thunks/fetchTasks.ts';
export * from './thunks/fetchTask.ts';
export * from './thunks/createTask.ts';
export * from './thunks/updateTask.ts';
export * from './thunks/deleteTask.ts';
