// redux/slices/paymentSlice.js
import { apiSlice } from "./apiSlice";

const paymentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    makePayment: builder.mutation({
      query: (paymentData) => ({
        url: "/payments/pay",
        method: "POST",
        body: paymentData,
      }),
      invalidatesTags: ["Payment"],
    }),
    fetchTransactions: builder.query({
      query: () => "/payments/transactions",
      providesTags: ["Payment"],
    }),
  }),
});

export const { useMakePaymentMutation, useFetchTransactionsQuery } =
  paymentApiSlice;

export default paymentApiSlice;
