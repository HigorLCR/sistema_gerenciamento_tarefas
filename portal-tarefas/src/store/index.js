import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './reducers/taskReducer';

const store = configureStore({
    reducer: {
        taskReducer: taskSlice.reducer
    }
});

export { store };