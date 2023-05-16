import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts/?_limit=10",
    }),
    getPhotos: builder.query({
      query: () => "photos?_limit=10",
    }),
  }),
});

export const { useGetPostsQuery, useGetPhotosQuery } = postsApi;
