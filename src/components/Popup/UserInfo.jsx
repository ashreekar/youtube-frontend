import React from 'react'
import { FaYoutube, FaRegKeyboard } from "react-icons/fa";
import { MdOutlineSwitchAccount, MdOutlineSettings, MdOutlineHelpOutline } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import { IoMoonOutline } from "react-icons/io5";
import { RiFeedbackLine } from "react-icons/ri";

function UserInfo() {
    return (
        <div className="flex flex-col p-4 w-full rounded-lg">

            <div className="flex gap-3 pb-3 border-b border-gray-300">
                <div className="rounded-full h-12 w-12 bg-pink-700 text-white flex items-center justify-center text-xl font-bold">
                    A
                </div>

                <div className="flex flex-col">
                    <p className="font-semibold text-sm">Ashreek A R</p>
                    <p className="text-xs text-gray-600">@ashreek123</p>

                    <p className="text-blue-600 text-xs cursor-pointer hover:underline">
                        View your channel
                    </p>
                </div>
            </div>

            <div className="flex flex-col py-2 border-b border-gray-300 text-sm">

                <button disabled className="flex items-center gap-3 p-2 text-gray-400 cursor-not-allowed">
                    <FaYoutube /> Your channel
                </button>

                <button disabled className="flex items-center gap-3 p-2 text-gray-400 cursor-not-allowed">
                    <MdOutlineSwitchAccount /> Switch account
                </button>

                <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer">
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