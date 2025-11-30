import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebarSlice.js'
import user from './userSlice.js'
import search from './searchSlic.js'
import overlay from './overlaySlice.js'
import sideOverlay from './sideOverlaySlice.js'
import video from './videoSlice.js'

const loadState = () => {
    // loading the loadstore on start state
    const storedState = localStorage.getItem('reduxStatestore');
    if (storedState === null) return undefined;
    const loadedState = JSON.parse(storedState);
    return {
        ...loadedState,
        video: {
            videosItem: []
        }
    }
};

// save store to save after every update(action dispatch)
const saveState = (state) => {
    const storedState = JSON.stringify(state);
    localStorage.setItem('reduxStatestore', storedState);
};

const persistedState = loadState();

const appStore = configureStore(
    {
        reducer: {
            sidebar,
            user,
            search,
            overlay,
            sideOverlay,
            video
        },
        preloadedState: persistedState
    }
)

appStore.subscribe(() => {
    saveState(appStore.getState());
})

export { appStore };