import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RootState} from "../store";

// Initialize an empty api service that we'll inject endpoints into later as needed
const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://stockportfolio-api.carabain.net/',
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            return headers;
        }
    }),
    endpoints: () => ({}),
});

export default baseApi;