import baseApi from "../api";
import type { EmployeeById } from "./types";
import type { Employee } from "../../store/employee/employee.types";

export const employeeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => '/employees',
            providesTags: ['EMPLOYEES']
        }),
        deleteEmployee: builder.mutation<void, EmployeeById>({
            query: ({ id }) => ({
                url: `/employees/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['EMPLOYEES']
        }),
        getEmployeeById: builder.query<Employee, EmployeeById>({
            query: ({ id }) => ({
                url: `/employees/${id}`,
                method: 'GET',
                providesTags: ['EMPLOYEES']
            }),
        }),
        updateEmployee: builder.mutation<Employee, Employee>({
            query: (employee) => ({
                url: `/employees/${employee.id}`,
                method: 'PUT',
                body: employee,
                providesTags: ['EMPLOYEES']
            }),
        }),
        createEmployee: builder.mutation<void, Employee>({
            query:(employee) => ({
                url: `/employees`,
                method:'POST',
                body: employee,
                providesTags: ['EMPLOYEES']
            })
        })
    })
});

export const { useGetEmployeeListQuery, useDeleteEmployeeMutation,useGetEmployeeByIdQuery, useUpdateEmployeeMutation, useCreateEmployeeMutation } = employeeApi