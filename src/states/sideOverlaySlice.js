import { createSlice } from "@reduxjs/toolkit";

// side overlay slice is to create a sidemenu to get options
const sideOverlaySlice = createSlice({
  name: "sideOverlay",
  // maintains state of user and create states flag
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