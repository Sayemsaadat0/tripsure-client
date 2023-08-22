import { createSlice } from "@reduxjs/toolkit";

export const searchData = createSlice({
    name: "searchData",
    initialState: {data: [], searchText : ""},
    reducers: {
        setSearchData: (state, action) => {
            
            state.data = action.payload;
        },
    setSearchText: (state, action) => {
            
            state.searchText = action.payload;
        },
    }
})

export const {setSearchData, setSearchText} = searchData.actions;

export default searchData.reducer;