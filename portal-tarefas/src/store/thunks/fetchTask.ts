import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTask = createAsyncThunk('tasks/fetchone', async (id: string) => {
    const response: any = axios.get(`http://localhost:3000/tarefas/${id}`);

    return response.data;
});

export { fetchTask };