import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: "searchCategory",
    initialState: {category: "Search All"},
    reducers: {
        setActiveCategory: (state, action) => {
            state.category = action.payload;
        }
    }
})

export const {setActiveCategory} = categorySlice.actions;

export default categorySlice.reducer;