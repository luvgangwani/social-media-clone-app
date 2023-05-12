import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader';
import modalReducer from './modal';

export default configureStore({
    reducer: {
        loader: loaderReducer,
        modal: modalReducer,
    }
});
