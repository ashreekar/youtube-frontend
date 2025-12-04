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
        // emptying videos item as we have a check to refresh videos after 
        // every refresh so filtered category videos don't persist
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

// subscribe hook runs after changes in store in terms of data
appStore.subscribe(() => {
    saveState(appStore.getState());
})

export { appStore };