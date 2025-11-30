import { createSlice } from "@reduxjs/toolkit";


const videoSlice = createSlice(
    {
        name: "Video",
        initialState: {
            videosItem: []
        },
        reducers: {
            setVideosItem: (state, action) => {
                state.videosItem = action.payload;
            }
        }
    }
)

export const { setVideosItem } = videoSlice.actions;
export default videoSlice.reducer;