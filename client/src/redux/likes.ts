import { createSlice } from '@reduxjs/toolkit';

export const likesSlice = createSlice({
    name: 'liked',
    initialState: {
        posts: [],
    },
    reducers: {
        setLikedPosts:(state, action) => {
            state.posts = action.payload;
        }
    }
});

export const { setLikedPosts } = likesSlice.actions;

export default likesSlice.reducer;
