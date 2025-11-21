import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { toggleOverlay } from "../../states/overlaySlice";
import { toggleUserOverlay, toggleCreateOverlay } from "../../states/sideOverlaySlice";

import Popup from "../SidebarAndPopUp/Popup";
import CreateVideo from "../Popups/CreateVideo";
import Sidebar from './Sidebar';
import CreateInfo from '../Popup/CreateInfo';
import UserInfo from '../Popup/UserInfo';
import ChannelCreation from '../Popups/ChannelCreation';

function GlobalOverlay() {
    const dispatch = useDispatch();
    const videopopup = useSelector(state => state.overlay.open);

    const isOpenUser = useSelector((state) => state.sideOverlay.user);
    const isOpenCreate = useSelector((state) => state.sideOverlay.create);

    const user=useSelector((state)=>state.user.user);

    return (
        <>
            {
                videopopup && <Popup popupkey="channel" closePopup={() => dispatch(toggleOverlay())}>
                   {
                    user.channel.length === 0 ?<ChannelCreation/> : <CreateVideo />
                   } 
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