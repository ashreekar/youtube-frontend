import { createSlice } from "@reduxjs/toolkit";

// this is the overlay for video and post popups that
// are part of larger popups
const overlaySlice = createSlice(
    {
        name: "Overlay",
        initialState: {
            video: false,
            post: false
        },
        reducers: {
            // making video and post flags toggle on click of each other
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

export const { togglePostOverlay, toggleVideoOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;