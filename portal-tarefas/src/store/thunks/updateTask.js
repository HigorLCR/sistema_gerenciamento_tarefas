import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const updateTask =  createAsyncThunk('tasks/update', async (id, dados) => {
    const { titulo, descricao, status, dataCriacao } = dados;
    
    const response = axios.put(
        `http://localhost:3000/tarefas/${id}`,
        {
            titulo,
            descricao,
            status, 
            dataCriacao
        }
    );

    return response.data;
});

export { updateTask };