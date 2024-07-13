import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (newProduct) => ({
        method: "POST",
        url: "/product",
        body: newProduct,
      }),
      // Cache invalidation after mutation
      invalidatesTags: ["Product"],
    }),
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
    deleteProduct: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/product/${id}`,
      }),
      // Cache invalidation after mutation
      invalidatesTags: ["Product"],
    }),
    updateSingleProduct: builder.mutation({
      query: (updatedProduct) => ({
        method: "PATCH",
        url: `/product/${updatedProduct.id}`,
        body: updatedProduct.data,
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
  useUpdateSingleProductMutation,
} = baseApi;
