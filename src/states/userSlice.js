import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "User",
        initialState: {
            user: null,
            loggedIn: false
        },
        reducers: {
            loginUser: (state, action) => { },
            logoutUser: (state, action) => { }
        }
    }
)

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;