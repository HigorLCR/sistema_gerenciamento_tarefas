import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './slices/tasksSlice';

export const store = configureStore({
    reducer: {
        taskReducer: taskSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch
export * from './thunks/fetchTasks';