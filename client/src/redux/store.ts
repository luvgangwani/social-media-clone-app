import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader';
import authReducer from './auth';

export default configureStore({
    reducer: {
        loader: loaderReducer,
        auth: authReducer,
    }
});
