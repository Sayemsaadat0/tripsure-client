import { configureStore } from "@reduxjs/toolkit"
import categorySlice from "../Features/searchCategory/categorySlice"
import searchData from "../Features/searchCategory/searchData"
import baseFavoriteApi from "../Features/favorite/favoriteApi"

const Store = configureStore({
    reducer: {
        category: categorySlice,
        searchData: searchData,
        [baseFavoriteApi.reducerPath]: baseFavoriteApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseFavoriteApi.middleware),
})

export default Store