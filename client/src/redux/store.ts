import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from './loader';

export default configureStore({
    reducer: {
        loader: loaderReducer,
    }
});
