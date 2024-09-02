import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const updateTask =  createAsyncThunk('tasks/update', async (dados: {
    id: string,
    titulo: string,
    descricao: string,
    status: string,
    dataCriacao: string
}) => {
    const { id, titulo, descricao, status, dataCriacao } = dados;
    
    const response: any = axios.put(
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