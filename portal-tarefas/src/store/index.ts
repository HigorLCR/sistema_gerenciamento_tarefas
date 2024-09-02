import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/tasksSlice';

export const store = configureStore({
    reducer: {
        taskReducer: taskSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch
export * from './thunks/fetchTasks';
export * from './thunks/fetchTask';
export * from './thunks/createTask';
export * from './thunks/updateTask';
export * from './thunks/deleteTask';
