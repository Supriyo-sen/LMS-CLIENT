import { apiSlice } from "./apiSlice";

const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Access or create a one-on-one chat
    accessChat: builder.mutation({
      query: (userId) => ({
        url: "/chat",
        method: "POST",
        body: { userId },
      }),
      invalidatesTags: ["Chat"],
    }),

    // Fetch all chats for the logged-in user
    fetchChats: builder.query({
      query: () => "/chat",
      providesTags: ["Chat"],
    }),

    // Send a message
    sendMessage: builder.mutation({
      query: (messageData) => ({
        url: "/chat/message",
        method: "POST",
        body: messageData,
      }),
      invalidatesTags: ["Chat"],
    }),

    // get all messages for a specific chat
    allMessages: builder.query({
      query: (chatId) => `/chat/${chatId}`,
      providesTags: ["Chat"],
    }),

    // Mark messages as read
    markMessagesAsRead: builder.mutation({
      query: (chatId) => ({
        url: `/chat/${chatId}/mark-read`,
        method: "PUT",
      }),
      invalidatesTags: ["Chat"],
    }),

    // Delete a message
    deleteMessage: builder.mutation({
      query: (messageId) => ({
        url: `/chat/${messageId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chat"],
    }),

    // Update a message
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
  useAccessChatMutation,
  useFetchChatsQuery,
  useSendMessageMutation,
  useAllMessagesQuery,
  useMarkMessagesAsReadMutation,
  useDeleteMessageMutation,
  useUpdateMessageMutation,
} = chatApiSlice;

export default chatApiSlice;
