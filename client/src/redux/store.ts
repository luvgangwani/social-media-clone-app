import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader';
import modalReducer from './modal';
import connectionsReducer from './connections';

export default configureStore({
    reducer: {
        loader: loaderReducer,
        modal: modalReducer,
        connections: connectionsReducer,
    }
});
