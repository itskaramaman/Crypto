import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'b7993fe596msh03dee8ca0ce1fd4p1826f7jsn8a87fad83399'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
});


export const {
    useGetCryptoQuery,
} = cryptoApi;