// redux/slices/courseSlice.js
import { apiSlice } from "./apiSlice";

const courseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchCourses: builder.query({
      query: () => "/courses",
      providesTags: ["Course"],
    }),
    fetchCourseDetails: builder.query({
      query: (id) => `/courses/${id}`,
      providesTags: (result, error, id) => [{ type: "Course", id }],
    }),
    enrollStudent: builder.mutation({
      query: ({ courseId, studentId }) => ({
        url: `/courses/${courseId}/enroll`,
        method: "POST",
        body: { studentId },
      }),
      invalidatesTags: ["Course"],
    }),
  }),
});

export const {
  useFetchCoursesQuery,
  useFetchCourseDetailsQuery,
  useEnrollStudentMutation,
} = courseApiSlice;

export default courseApiSlice;
