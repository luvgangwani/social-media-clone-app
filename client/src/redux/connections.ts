import { createSlice } from "@reduxjs/toolkit";

export const connectionsSlice = createSlice({
    name: 'connections',
    initialState: {
        list: []
    },
    reducers: {
        setConnectionsList: (state, action) => {
            state.list = action.payload
        }
    }
});

export const { setConnectionsList } = connectionsSlice.actions;

export default connectionsSlice.reducer;
