import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const GetApi = createApi({
  reducerPath: "PostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // get all products......
    getProducts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),

    // get by id......
    getByIdProducts: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),

    // get by limits......
    getLimitsProducts: builder.query({
      query: (num) => ({
        url: `posts?_limit=${num}`,
        method: "GET",
      }),
    }),

    // del products......
    delProducts: builder.mutation({
      query: (num) => ({
        url: `posts/${num}`,
        method: "DELETE",
      }),
    }),

    // add new products......
    addProducts: builder.mutation({
      query: (newPro) => ({
        url: `posts`,
        method: "POST",
        body: newPro,
        header: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetByIdProductsQuery,
  useGetLimitsProductsQuery,
  useDelProductsMutation,
  useAddProductsMutation,
} = GetApi;
