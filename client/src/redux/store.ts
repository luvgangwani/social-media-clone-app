import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader';
import modalReducer from './modal';
import connectionsReducer from './connections';
import likesReducer from './likes';

export default configureStore({
    reducer: {
        loader: loaderReducer,
        modal: modalReducer,
        connections: connectionsReducer,
        liked: likesReducer,
    }
});
