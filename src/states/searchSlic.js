import { createSlice } from '@reduxjs/toolkit'

// search slice is to store recently searched values and to store results
const searchSlice = createSlice({
    name: "Search",
    initialState: {
        query: "",
        results: [],
        recentSearch: []
    },
    reducers: {
        // this will set search results on dispatch
        setSearchResults: (state, action) => {
            state.results = action.payload;
        },
        // this component is called before comoonent unmounts
        clearSearchResults: (state) => {
            state.results = [];
            state.query = "";
        },
        // appending the search value on to header
        setRecent: (state, action) => {
            // avoiding the duplicate values even if it's lower case
            if (
                state.recentSearch.find(val => val.trim().toLowerCase() === action.payload.trim().toLowerCase())
            ) {
                return;
            }
            state.recentSearch = [...state.recentSearch, action.payload];
        }
    }
})

export const { setSearchResults, clearSearchResults, setRecent } = searchSlice.actions;

export default searchSlice.reducer;