import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
    name: 'loader',
    initialState: {
        show: false,
    },
    reducers: {
        setShowLoader:(state, action) => {
            state.show = action.payload;
        }
    }
});

export const { setShowLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
