import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseFavoriteApi = createApi({
    reducerPath: 'favorite',
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_API},`
    }), 
    endpoints: (builder) => ({
        getFavoriteItems: builder.query({
            query: () => ({
                url: '/favorite'
            })
        }),
        getYourFavoritItems: builder.query({
            query: (email) => ({
                url: `/favorite/${email}`
            })
        }),
        addToFavorite: builder.mutation({
            query: (favoriteItem) => ({
                url: '/favorite',
                method: 'POST',
                body: favoriteItem
            })
        }),
        removeFavoriteItem: builder.mutation({
            query: (id) => ({
                url: `/favorite/${id}`,
                method: "DELETE"
            })
        })
    })
})
export const {useAddToFavoriteMutation, useGetFavoriteItemsQuery, useGetYourFavoritItemsQuery, useRemoveFavoriteItemMutation} = baseFavoriteApi
export default baseFavoriteApi
