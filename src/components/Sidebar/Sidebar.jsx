import ExploreSidebar from './ExploreSidebar'
import SettingsSidebar from './SettingsSidebar'
import SidbarFooter from './SidbarFooter'
import SubscriptionSidebar from './SubscriptionSidebar'
import UserSidebar from './UserSidebar'
import YoutubeSidebar from './YoutubeSidebar'
import { useSelector } from 'react-redux'

import {
    MdOutlineHome,
    MdOutlineSubscriptions,
    MdOutlinePerson,
    MdOutlineDownload
} from "react-icons/md";

import { PiYoutubeLogoLight } from "react-icons/pi";

function Sidebar() {
    const isSidebarOpen = useSelector(store => store.sidebar.open);

    const componentsOnClose = [
        {
            name: "Home",
            element: <MdOutlineHome className="w-6 h-6" />
        },
        {
            name: "Shorts",
            element: <PiYoutubeLogoLight className="w-6 h-6" />
        },
        {
            name: "Subscriptions",
            element: <MdOutlineSubscriptions className="w-6 h-6" />
        },
        {
            name: "You",
            element: <MdOutlinePerson className="w-6 h-6" />
        },
        {
            name: "Downloads",
            element: <MdOutlineDownload className="w-6 h-6" />
        },
    ];

    return (
        isSidebarOpen ? (
            <div className="fixed z-10 top-16 left-0 w-64 h-[calc(100vh-64px)] overflow-y-auto bg-white">
                <YoutubeSidebar />
                <div className="border-t w-[80%] border-gray-300 my-2"></div>

                <UserSidebar />
                <div className="border-t w-[80%] border-gray-300 my-2"></div>

                <SubscriptionSidebar />
                <div className="border-t w-[80%] border-gray-300 my-2"></div>

                <ExploreSidebar />
                <div className="border-t w-[80%] border-gray-300 my-2"></div>

                <SettingsSidebar />
                <div className="border-t w-[80%] border-gray-300 my-2"></div>

                <SidbarFooter />
            </div>
        ) : (
            <div className="fixed hidden top-16 left-0 w-20 h-[calc(100vh-64px)] overflow-y-auto no-scrollbar bg-white sm:flex flex-col items-center py-4">
                {componentsOnClose.map(component => (
                    <div
                        key={component.name}
                        className="flex flex-col items-center justify-center hover:bg-gray-100 rounded-lg p-3 w-full h-20 cursor-pointer"
                    >
                        {component.element}
                        <span className="text-[11px] text-center">{component.name}</span>
                    </div>
                ))}
            </div>
        )
    );
}

export default Sidebar;