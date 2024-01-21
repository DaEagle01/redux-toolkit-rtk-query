import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ data }) => ({
        url: `/comment`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getAllComments: builder.query({
      query: () => '/comment',
      providesTags: ['comments'],
    }),
    getCommentsSingleProduct: builder.query({
      query: (id) => `/comment/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  usePostCommentMutation,
  useGetAllCommentsQuery,
  useGetCommentsSingleProductQuery,
} = productApi;
