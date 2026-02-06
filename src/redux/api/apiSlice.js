// src/redux/api/apiSlice.js

import { baseUriBackend } from "@/utils/url";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUriBackend,

    // set header
    // prepareHeaders: headers => {
    // 	const token = localStorage.getItem("accessToken");
    // 	if (token) {
    // 		headers.set("Authorization", `Bearer ${token}`);
    // 	}
    // 	return headers;
    // },
  }),
  tagTypes: ["User"],
  endpoints: () => ({}),
});
