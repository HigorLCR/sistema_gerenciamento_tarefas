import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
    name: 'task',
    initialState: {
        tasks: [],
        task: {}
    },
    reducers: {
        listTasks(state, action) {
            state.push(action.payload);
        },
        getTask(state, action) {

        },
        createTask(state, action) {

        },
        updateTask(state, action) {

        },
        deleteTask(state, action) {

        }
    }
});

export default taskSlice;