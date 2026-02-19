'use client';

import { GET_MESSAGE, SEND_MESSAGE } from "@/utils/url";
import { apiSlice } from "../api/apiSlice";



export const MessageApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    //1. SIGN UP
   getMessageByUsers: builder.query({
      query: (id) => ({
        url: `${GET_MESSAGE}/${id}`,
        method: "GET",
      }),
      providesTags:["message"]
    }),

  sendMessage: builder.mutation({
      query: (data) => ({
        url: SEND_MESSAGE,
        method: "POST",
        body: data,
      }),
        invalidatesTags:["message"]
    }),


  
  }),
});

export const { useGetMessageByUsersQuery,useSendMessageMutation} = MessageApi;