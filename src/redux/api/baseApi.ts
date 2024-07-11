import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/product/${id}`,
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = baseApi;
