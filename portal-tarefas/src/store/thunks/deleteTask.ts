import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteTask = createAsyncThunk('tasks/remove', async (id: string) => {
    const response: any = await axios.delete(`http://localhost:3000/tarefas/${id}`);

    return response.data;
});

export { deleteTask };