import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from '../thunks/fetchTasks';
import { fetchTask } from '../thunks/fetchTask';
import { createTask } from '../thunks/createTask';
import { updateTask } from '../thunks/updateTask';
import { deleteTask } from '../thunks/deleteTask';


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
        },
        create: {
            isLoading: false,
            error: null
        },
        delete: {
            isLoading: false,
            error: null
        },
        update: {
            isLoading: false,
            error: null
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchTasks.pending, (state, action) => {
            state.tasks.isLoading = true;
            state.tasks.error = null;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.tasks.isLoading = false;
            state.tasks.data = action.payload.response;
        });
        builder.addCase(fetchTasks.rejected, (state, action) => {
            state.tasks.isLoading = false;
            state.tasks.error = action.payload ? action.payload.error : 1;
        });

        builder.addCase(fetchTask.pending, (state, action) => {
            state.task.isLoading = true;
            state.task.error = null;
        });
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            state.task.isLoading = false;
            state.task.data = action.payload.response;
        });
        builder.addCase(fetchTask.rejected, (state, action) => {
            state.task.isLoading = false;
            state.task.error = action.payload ? action.payload.error : 1;
        });

        builder.addCase(createTask.pending, (state, action) => {
            state.create.isLoading = true;
            state.create.error = null;
        });
        builder.addCase(createTask.fulfilled, (state, action) => {
            state.create.isLoading = false;
        });
        builder.addCase(createTask.rejected, (state, action) => {
            state.create.isLoading = false;
            state.create.error = action.payload ? action.payload.error : 1;
        });

        builder.addCase(updateTask.pending, (state, action) => {
            state.update.isLoading = true;
            state.update.error = null;
        });
        builder.addCase(updateTask.fulfilled, (state, action) => {
            state.update.isLoading = false;
        });
        builder.addCase(updateTask.rejected, (state, action) => {
            state.update.isLoading = false;
            state.update.error = action.payload ? action.payload.error : 1;
        });

        builder.addCase(deleteTask.pending, (state, action) => {
            state.delete.isLoading = true;
            state.delete.error = null;
        });
        builder.addCase(deleteTask.fulfilled, (state, action) => {
            state.delete.isLoading = false;
        });
        builder.addCase(deleteTask.rejected, (state, action) => {
            state.delete.isLoading = false;
            state.delete.error = action.payload ? action.payload.error : 1;
        });
    }
});

export default taskSlice;