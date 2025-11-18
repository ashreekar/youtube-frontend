import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        query: "",
        results: [],
        dataList: []
    },
    reducers: {
        setSearchResults: (state, action) => {
            const query = action.payload;

            state.results = state.dataList.filter((data) => {
                return (
                    data.title.includes(query) ||
                    data.channel.includes(query) ||
                    data.description.includes(query)
                )
            })
        },
        clearSearchResults: (state) => {
            state.results = [];
            state.query = "";
        },
        setDataList: (state, action) => {
            state.dataList = action.payload;
        }
    }
})

export const { setSearchResults, clearSearchResults, setDataList } = searchSlice.actions;

export default searchSlice.reducer;