// redux/slices/adminSlice.js
import { apiSlice } from "./apiSlice";

const adminApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllUsers: builder.query({
      query: () => "/admin/users",
      providesTags: ["Admin"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/admin/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Admin"],
    }),
    fetchAllCourses: builder.query({
      query: () => "/admin/courses",
      providesTags: ["Course"],
    }),
    addCourse: builder.mutation({
      query: (formData) => ({
        url: "/admin/courses",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Course"],
    }),
  }),
});

export const {
  useFetchAllUsersQuery,
  useDeleteUserMutation,
  useFetchAllCoursesQuery,
  useAddCourseMutation,
} = adminApiSlice;

export default adminApiSlice;
