import { createSlice } from "@reduxjs/toolkit";

// sidebar slice is to mainatian state of sidebar flag open/close
const sidebarSlice = createSlice(
    {
        name: "Sidebar",
        initialState: {
            open: true
        },
        reducers: {
            toggleSidebar: (state, action) => {
                state.open = !state.open;
            }
        }
    }
)

export const { toggleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;