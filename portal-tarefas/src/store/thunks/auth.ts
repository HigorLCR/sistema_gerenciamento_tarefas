import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const auth = createAsyncThunk('users/auth', async (dados: {
        login: string,
        senha: string
    }) => {
    const { login, senha } = dados;

    const response: any = await axios.post(
        `http://localhost:3100/users/auth`,
        {
            login: login,
            senha: senha
        }
    );

    return response.data;
});

export { auth };