import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/tasksSlice';
import userSlice from './slices/usersSlice.js';

export const store = configureStore({
    reducer: {
        taskReducer: taskSlice.reducer,
        userReducer: userSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export const { cleanAuthToken } = userSlice.actions;
export const { clearCreateTask } = taskSlice.actions;
export * from './thunks/fetchTasks.ts';
export * from './thunks/fetchTask.ts';
export * from './thunks/createTask.ts';
export * from './thunks/updateTask.ts';
export * from './thunks/deleteTask.ts';
export * from './thunks/auth.ts';
