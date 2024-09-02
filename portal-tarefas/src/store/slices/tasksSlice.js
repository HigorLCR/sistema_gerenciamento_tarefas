import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from '../thunks/fetchTasks';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: {
            isLoading: false,
            data: [],
            error: null
        },
        task: {
            isLoading: false,
            data: {},
            error: null
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchTasks.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks.isLoading = false;
            state.tasks.data = action.payload;
        });
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.tasks.isLoading = false;
            state.tasks.error = action.payload;
        });
    }
});

export default taskSlice;