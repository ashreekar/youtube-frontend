import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebarSlice.js'
import user from './userSlice.js'
import search from './searchSlic.js'

const appStore = configureStore(
    {
        reducer: {
            sidebar,
            user,
            search
        }
    }
)

export { appStore };