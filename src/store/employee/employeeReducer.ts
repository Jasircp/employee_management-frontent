// import type { EmployeeAction, EmployeeState } from './employee.types';
// import { EMPLOYEE_ACTION_TYPES } from './employee.types';
// const initialState = {employees:[]}
// function EmployeeReducer(state: EmployeeState = initialState, action:EmployeeAction):EmployeeState { 
//     console.log(action);
//     switch(action.type){
//         case EMPLOYEE_ACTION_TYPES.DELETE:
//             return {
//                 ...state,
//                 employees: state.employees.filter((employee) => employee.employeeId !== action.payload)
//             }
//         case EMPLOYEE_ACTION_TYPES.UPDATE:
//             return {
//                 ...state,
//                 employees:state.employees.map((emp) => {
//                     if(action.payload.employeeId === emp.employeeId)
//                         return {...emp,...action.payload}
//                     else{
//                         return emp;
//                     }
//                 })
//             }
//         case EMPLOYEE_ACTION_TYPES.ADD:
//             return {
//                 ...state,
//                 employees:[...state.employees,action.payload]
//             }
//         default:
//             return state;
//     }
    
// }

// export default EmployeeReducer;


import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Employee, EmployeeState } from './employee.types';

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer;
