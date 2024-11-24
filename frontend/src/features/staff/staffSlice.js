import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const staffAdapter = createEntityAdapter([]);

const initialState = staffAdapter.getInitialState();

export const staffsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStaffs: builder.query({
      query: () => ({ url: "/api/v1/staffs", method: "GET" }),
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError;
      },
      transformResponse: (responseData) => {
        const loadedUsers = responseData.data.map((staff) => {
          staff.id = staff._id;
          return staff;
        });
        return staffAdapter.setAll(initialState, loadedUsers);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Staff", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Staff", id })),
          ];
        } else return [{ type: "Staff", id: "LIST" }];
      },
    }),
    getStaffById: builder.query({
      query: (id) => ({ url: `/api/v1/staffs/${id}`, method: "GET" }),
      transformResponse: (responseData) => {
        responseData.id = responseData._id;
        return responseData;
      },
      providesTags: (result, error, arg) => [{ type: "Staff", id: arg }],
    }),
  }),
});

export const { useGetStaffsQuery, useGetStaffByIdQuery } = staffsApiSlice;

// returns the query result object
export const selectStaffResult = staffsApiSlice.endpoints.getStaffs.select();

// creates memoized selector
const selectUsersData = createSelector(
  selectStaffResult,
  (usersResult) => usersResult.data // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUserIds,
  // Pass in a selector that returns the users slice of state
} = staffAdapter.getSelectors(
  (state) => selectUsersData(state) ?? initialState
);
