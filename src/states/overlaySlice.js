import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice(
    {
        name: "Overlay",
        initialState: {
            video: false,
            post: false
        },
        reducers: {
            toggleVideoOverlay: (state, action) => {
                state.video = !state.video;
                state.post = false;
            },
            togglePostOverlay: (state, action) => {
                state.post = !state.post;
                state.video = false;
            },
        }
    }
)

export const { togglePostOverlay,toggleVideoOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;