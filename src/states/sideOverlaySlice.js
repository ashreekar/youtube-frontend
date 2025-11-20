import { createSlice } from "@reduxjs/toolkit";

const sideOverlaySlice = createSlice({
  name: "sideOverlay",
  initialState: {
    user: false,
    create: false,
  },
  reducers: {
    toggleUserOverlay: (state) => {
      state.user = !state.user;
      state.create = false;
    },
    toggleCreateOverlay: (state) => {
      state.create = !state.create;
      state.user = false;
    },
  },
});

export const { toggleCreateOverlay, toggleUserOverlay } = sideOverlaySlice.actions;

export default sideOverlaySlice.reducer;