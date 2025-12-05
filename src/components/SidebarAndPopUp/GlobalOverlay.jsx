import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toggleUserOverlay, toggleCreateOverlay } from "../../states/sideOverlaySlice";

import Popup from "../SidebarAndPopUp/Popup";
import CreateVideo from "../Popups/CreateVideo";
import CreatePost from "../Popups/CreatePost";
import Sidebar from './Sidebar';
import CreateInfo from '../Popup/CreateInfo';
import UserInfo from '../Popup/UserInfo';
import ChannelCreation from '../Popups/ChannelCreation';
import { toggleVideoOverlay, togglePostOverlay } from '../../states/overlaySlice';

function GlobalOverlay() {
    // Note: global overlays is a componet that is outside the flow 
    // reason: can easily open and close popups
    const dispatch = useDispatch();

    // overlay slice gives video,post popup
    const videopopup = useSelector(state => state.overlay.video);
    const postpopup = useSelector(state => state.overlay.post);

    // sideoverlay gives user, create sidebar
    const isOpenUser = useSelector((state) => state.sideOverlay.user);
    const isOpenCreate = useSelector((state) => state.sideOverlay.create);

    const user = useSelector((state) => state.user.user);

    return (
        <>
            {/* Conditionally rendering to create channel of not have a channel */}
            {
                videopopup && <Popup popupkey={user?.channel?.length === 0 ? "channel" : "video"} closePopup={() => dispatch(toggleVideoOverlay())}>
                    {
                        user?.channel.length === 0 ? <ChannelCreation closePopup={() => dispatch(toggleVideoOverlay())} /> : <CreateVideo />
                    }
                </Popup>
            }

            {
                postpopup && <Popup popupkey={user?.channel?.length === 0 ? "channel" : "video"} closePopup={() => dispatch(togglePostOverlay())}>
                    {user?.channel.length === 0 ? <ChannelCreation closePopup={() => dispatch(toggleVideoOverlay())} /> : <CreatePost closePopup={() => dispatch(toggleVideoOverlay())} />}
                </Popup>
            }

            {isOpenUser && (
                <Sidebar
                    sidebarKey="user"
                    closePopup={() => dispatch(toggleUserOverlay())}
                >
                    <UserInfo />
                </Sidebar>
            )}

            {isOpenCreate && (
                <Sidebar sidebarKey="create" closePopup={() => dispatch(toggleCreateOverlay())}>
                    <CreateInfo />
                </Sidebar>
            )}
        </>
    )
}

export default GlobalOverlay