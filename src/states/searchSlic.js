import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        query: "",
        results: [],
        recentSearch: []
    },
    reducers: {
        setSearchResults: (state, action) => {
            state.results = action.payload;
        },
        clearSearchResults: (state) => {
            state.results = [];
            state.query = "";
        },
        setRecent: (state, action) => {
            state.recentSearch = [...state.recentSearch, action.payload];
        }
    }
})

export const { setSearchResults, clearSearchResults, setRecent } = searchSlice.actions;

export default searchSlice.reducer;