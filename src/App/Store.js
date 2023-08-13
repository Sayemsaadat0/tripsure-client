import {configureStore} from "@reduxjs/toolkit"
import categorySlice from "../Features/searchCategory/categorySlice"

const Store = configureStore({
    reducer: {
        category : categorySlice,
    }
})

export default Store