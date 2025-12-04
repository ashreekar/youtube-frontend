import { createSlice } from "@reduxjs/toolkit";

// user slice stores the logged user info and their login status
const userSlice = createSlice(
    {
        name: "User",
        initialState: {
            user: null,
            loggedIn: false
        },
        reducers: {
            // on login status will be true 
            loginUser: (state, action) => {
                state.user = action.payload;
                state.loggedIn= true;
            },
            // on logout status will be false
            logoutUser: (state, action) => { 
                state.loggedIn=false;
                state.user=null;
            }
        }
    }
)

export const { loginUser, logoutUser, toggelLogin } = userSlice.actions;

export default userSlice.reducer;