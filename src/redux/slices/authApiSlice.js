import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/auth/forgotpassword",
        method: "POST",
        body: email,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, newPassword }) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: { token, newPassword },
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
