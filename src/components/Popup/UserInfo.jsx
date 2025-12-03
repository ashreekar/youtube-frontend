import React from 'react'
import { FaYoutube, FaRegKeyboard } from "react-icons/fa";
import { MdOutlineSwitchAccount, MdOutlineSettings, MdOutlineHelpOutline } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";
import axios from 'axios';

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, toggelLogin } from "../../states/userSlice"
import { toggleUserOverlay } from '../../states/sideOverlaySlice';
import { toggleVideoOverlay, togglePostOverlay } from '../../states/overlaySlice';

function UserInfo() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    const handleCreateVideo = () => {
        dispatch(toggleVideoOverlay())
    }

    const handleSignOut = async () => {
        const token = localStorage.getItem("acceasToken")
        axios.post("http://localhost:3317/api/v1/user/logout", null,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        )
        localStorage.clear();
        dispatch(logoutUser());
        dispatch(toggleUserOverlay());
    }

    return (
        <div className="flex flex-col p-4 w-full rounded-lg">

            <div className="flex gap-3 pb-3 border-b border-gray-300">
                <img className="rounded-full h-12 w-12 flex items-center justify-center" src={user?.avatar} />

                <div className="flex flex-col">
                    <p className="font-semibold text-sm">{user?.fullName}</p>
                    <p className="text-xs text-gray-600">@{user?.username}</p>

                    {
                        user?.channel.length === 0 ?
                            <p onClick={handleCreateVideo} className="text-blue-600 text-xs cursor-pointer hover:underline">
                                Create channel
                            </p> :
                            <Link to={'/feed/you'} onClick={() => dispatch(toggleUserOverlay())}>
                                <p className="text-blue-600 text-xs cursor-pointer hover:underline">
                                    View your channel
                                </p>
                            </Link>
                    }
                </div>
            </div>

            <div className="flex flex-col py-2 border-b border-gray-300 text-sm">
                {
                    user?.channel.length === 0 ?
                        null :
                        <Link to={'/feed/you'} onClick={() => dispatch(toggleUserOverlay())}>
                            <button className="flex items-center gap-3 p-2 text-black cursor-pointer">
                                <FaYoutube /> Your channel
                            </button>
                        </Link>
                }

                <button disabled className="flex items-center gap-3 p-2 text-gray-400 cursor-not-allowed">
                    <MdOutlineSwitchAccount /> Switch account
                </button>

                <button onClick={handleSignOut} className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
                    <PiSignOut /> Sign out
                </button>
            </div>
            <div className="flex flex-col py-2 border-b border-gray-300 text-sm text-gray-600">

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    <FaYoutube /> YouTube Studio
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    <MdOutlineSettings /> Purchase & Memberships
                </button>
            </div>

            <div className="flex flex-col py-2 border-b border-gray-300 text-sm text-gray-600">

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    Your data in YouTube
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    <IoMoonOutline /> Appearance: Device theme
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    Language: English
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    Restricted Mode: Off
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    Location: India
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    <FaRegKeyboard /> Keyboard shortcuts
                </button>
            </div>

            <div className="flex flex-col py-2 text-sm text-gray-600">
                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    <MdOutlineSettings /> Settings
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    <MdOutlineHelpOutline /> Help
                </button>

                <button disabled className="flex items-center gap-3 p-2 cursor-not-allowed">
                    <RiFeedbackLine /> Send feedback
                </button>
            </div>
        </div>
    )
}

export default UserInfo;