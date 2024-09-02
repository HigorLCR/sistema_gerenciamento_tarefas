import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createTask = createAsyncThunk('tasks/create', async (dados) => {
    const { titulo, descricao, status, dataCriacao } = dados;

    const response = axios.post(
        `http://localhost:3000/tarefas`,
        {
            titulo,
            descricao,
            status,
            dataCriacao
        }
    );

    return response.data;
});

export { createTask };