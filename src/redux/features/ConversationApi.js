'use client';

import { GET_CONVERSATION } from "@/utils/url";
import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    //1. SIGN UP
    getConversation: builder.query({
      query: () => ({
        url: GET_CONVERSATION,
        method: 'GET',
      }),
    }),

    //2. SIGN -IN
    // signIn: builder.mutation({
    //   query: (Credential) => ({
    //     url: SIGN_IN,
    //     method: 'POST',
    //     body: Credential,
    //   }),
    // }),

    // 3.refresh token

  
  }),
});

export const { useGetConversationQuery} = authApi;