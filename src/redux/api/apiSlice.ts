import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6582c79d02f747c8367a323f.mockapi.io',
  }),
  tagTypes: ['comments'],
  endpoints: () => ({}),
});
