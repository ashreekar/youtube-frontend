import { createSlice } from "@reduxjs/toolkit";

// video slice gives video items to render on homescreen and 
// filter of videos
const videoSlice = createSlice(
    {
        name: "Video",
        initialState: {
            videosItem: []
        },
        reducers: {
            // this is callled when compoent loads and when component filters
            setVideosItem: (state, action) => {
                state.videosItem = action.payload;
            }
        }
    }
)

export const { setVideosItem } = videoSlice.actions;
export default videoSlice.reducer;