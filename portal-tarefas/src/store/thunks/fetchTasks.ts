import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTasks = createAsyncThunk('tasks/fetch', async () => {
    const response: any = await axios.get('http://localhost:3000/tarefas');

    return response.data;
});

export { fetchTasks };
