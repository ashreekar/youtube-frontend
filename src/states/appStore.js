import { configureStore } from '@reduxjs/toolkit'
import sidebar from './sidebarSlice.js'
import user from './userSlice.js'
import search from './searchSlic.js'
import overlay from './overlaySlice.js'
import sideOverlay from './sideOverlaySlice.js'

const loadState = () => {
    // loading the loadstore on start state
    const storedState = localStorage.getItem('reduxStatestore');
    if (storedState === null) return undefined;
    return JSON.parse(storedState);
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
            sideOverlay
        },
        preloadedState: persistedState
    }
)

appStore.subscribe(() => {
    saveState(appStore.getState());
})

export { appStore };