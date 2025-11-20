import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice(
    {
        name: "Overlay",
        initialState: {
            open: false
        },
        reducers: {
            toggleOverlay: (state, action) => {
                state.open = !state.open;
            }
        }
    }
)

export const { toggleOverlay } = overlaySlice.actions;

export default overlaySlice.reducer;