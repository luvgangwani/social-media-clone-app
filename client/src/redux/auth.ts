import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        }
    }
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
