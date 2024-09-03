import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../thunks/auth.ts';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        auth: {
            isLoading: false,
            token: null,
            error: null
        },
    },
    reducers: {
        cleanAuthToken(state, action) {
            state.auth.token = null;
        }
    },
    extraReducers(builder) {
        builder.addCase(auth.pending, (state, action) => {
            state.auth.isLoading = true;
            state.auth.error = null;
        });
        builder.addCase(auth.fulfilled, (state, action) => {
            state.auth.isLoading = false;
            state.auth.token = action.payload.response;
        });
        builder.addCase(auth.rejected, (state, action) => {
            state.auth.isLoading = false;
            state.auth.error = action.payload ? action.payload.error : 500;
        });
    }
});

export default userSlice;