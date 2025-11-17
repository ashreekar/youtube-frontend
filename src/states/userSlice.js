import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "User",
        initialState: {
            user: null,
            loggedIn: true
        },
        reducers: {
            toggelLogin:(state,action)=>{ state.loggedIn=!state.loggedIn},
            loginUser: (state, action) => { },
            logoutUser: (state, action) => { }
        }
    }
)

export const { loginUser, logoutUser,toggelLogin } = userSlice.actions;

export default userSlice.reducer;