import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebarSlice.js'
import user from './userSlice.js'

const appStore = configureStore(
    {
        reducer: {
            sidebar,
            user
        }
    }
)

export { appStore };