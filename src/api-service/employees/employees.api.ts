import baseApi from "../api";
import type { DeleteEmployee } from "./types";

export const employeeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => '/employees',
            providesTags: ['EMPLOYEES']
        }),
        deleteEmployee: builder.mutation<void, DeleteEmployee>({
            query: ({ id }) => ({
                url: `/employees/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['EMPLOYEES']
        })
    })
});

export const { useGetEmployeeListQuery, useDeleteEmployeeMutation } = employeeApi