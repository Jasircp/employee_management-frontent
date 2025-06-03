import baseApi from "../api";

export const departmentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDepartmentList: builder.query<any, void>({
            query: () => '/departments',
        })
    })
})

export const {useGetDepartmentListQuery} = departmentApi