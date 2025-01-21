import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (messageData) => ({
        url: "/chat",
        method: "POST",
        body: messageData,
      }),
      invalidatesTags: ["Chat"],
    }),
    getChatHistory: builder.query({
      query: (roomId) => `/chat/${roomId}`,
      providesTags: ["Chat"],
    }),
    markMessagesAsRead: builder.mutation({
      query: (roomId) => ({
        url: `/chat/${roomId}/mark-read`,
        method: "PUT",
      }),
      invalidatesTags: ["Chat"],
    }),
    deleteMessage: builder.mutation({
      query: (messageId) => ({
        url: `/chat/${messageId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chat"],
    }),
    updateMessage: builder.mutation({
      query: ({ messageId, updatedContent }) => ({
        url: `/chat/${messageId}`,
        method: "PUT",
        body: { content: updatedContent },
      }),
      invalidatesTags: ["Chat"],
    }),
  }),
});

export const {
  useSendMessageMutation,
  useGetChatHistoryQuery,
  useMarkMessagesAsReadMutation,
  useDeleteMessageMutation,
  useUpdateMessageMutation,
} = chatApiSlice;

export default chatApiSlice;
