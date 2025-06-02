import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import EmployeeReducer from './employee/employeeReducer';
export const store = createStore(
    EmployeeReducer,
    undefined,
    applyMiddleware(logger)
);