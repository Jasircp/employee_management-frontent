import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import EmployeeReducer from './employee/employeeReducer';
import baseApi from '../api-service/api';
import { useDispatch, useSelector } from 'react-redux';
export const store = configureStore({
    reducer: {
        employee: EmployeeReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type Appstore = typeof store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = useSelector<RootState,any>