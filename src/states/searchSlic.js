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
            const query = action.payload.toLowerCase();
            state.results = state.dataList.filter((data) => {
                 return (
                    data.title.toLowerCase().includes(query) ||
                    data.channelName.toLowerCase().includes(query) ||
                    data.description.toLowerCase().includes(query)
                );
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