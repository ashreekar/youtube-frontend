import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebarSlice.js'
import user from './userSlice.js'
import search from './searchSlic.js'
import overlay from './overlaySlice.js'
import sideOverlay from './sideOverlaySlice.js'

const appStore = configureStore(
    {
        reducer: {
            sidebar,
            user,
            search,
            overlay,
            sideOverlay
        }
    }
)

export { appStore };