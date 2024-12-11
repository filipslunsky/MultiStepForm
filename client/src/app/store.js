import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formSlice from '../features/form/state/slice.js';


const appReducer = combineReducers({
    form: formSlice,
});

const store = configureStore({
    reducer: appReducer
});

export default store;