'use client';

import { apiSlice } from "@/redux/api/apiSlice";
import { SIGN_IN, SIGN_UP } from "@/utils/url";



// import { SIGN_IN } from "@/common/constantData/url";

// console.log('SIGN_IN URL is:', SIGN_IN);
export const authApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    //1. SIGN UP
    signUp: builder.mutation({
      query: (userData) => ({
        url: SIGN_UP,
        method: 'POST',
        body: userData,
      }),
    }),

    //2. SIGN -IN
    signIn: builder.mutation({
      query: (Credential) => ({
        url: SIGN_IN,
        method: 'POST',
        body: Credential,
      }),
    }),

    // 3.refresh token

  
  }),
});

export const { useSignUpMutation,useSignInMutation } = authApi;