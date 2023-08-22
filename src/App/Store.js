import {configureStore} from "@reduxjs/toolkit"
import categorySlice from "../Features/searchCategory/categorySlice"
import searchData from "../Features/searchCategory/searchData"

const Store = configureStore({
    reducer: {
        category: categorySlice,
        searchData: searchData
    }
})

export default Store