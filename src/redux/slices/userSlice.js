// redux/slices/userSlice.js
import { apiSlice } from "./apiSlice";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => "/users/profile",
      providesTags: ["User"],
    }),
    changePassword: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/change-password/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const { useGetUserProfileQuery, useChangePasswordMutation } =
  userApiSlice;

export default userApiSlice;
