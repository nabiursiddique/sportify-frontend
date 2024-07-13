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
    createProduct: builder.mutation({
      query: (newProduct) => ({
        method: "POST",
        url: "/product",
        body: newProduct,
      }),
      // Cache invalidation after mutation
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
      // Cache invalidation after mutation
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} = baseApi;
