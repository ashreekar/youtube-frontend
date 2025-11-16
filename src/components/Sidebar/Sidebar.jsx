import ExploreSidebar from './ExploreSidebar'
import SettingsSidebar from './SettingsSidebar'
import SidbarFooter from './SidbarFooter'
import SubscriptionSidebar from './SubscriptionSidebar'
import UserSidebar from './UserSidebar'
import YoutubeSidebar from './YoutubeSidebar'
import { useSelector } from 'react-redux'

// Icons
import { TiHome } from "react-icons/ti";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa"

function Sidebar() {
    const isSidebarOpen = useSelector(store => store.sidebar.open);

    const componentsOnClose = [
        {
            name: "Home",
            element: <TiHome size={20} />
        },
        {
            name: "Shorts",
            element: <SiYoutubeshorts size={20}  />
        },
        {
            name: "Subscriptions",
            element: <MdOutlineSubscriptions size={20}  />
        },
        {
            name: "You",
            element: <FaUserCircle size={20}  />
        },
        {
            name: "Downloads",
            element: <MdDownload size={20}  />
        },
    ]

    return (
        isSidebarOpen ? (
            <div className="w-64 ml-4">
                <YoutubeSidebar />
                <div className='border-t-2 w-[60] border-gray-300'></div>
                <UserSidebar />
                <div className='border-t-2 w-[60] border-gray-300'></div>
                <SubscriptionSidebar />
                <div className='border-t-2 w-[60] border-gray-300'></div>
                <ExploreSidebar />
                <div className='border-t-2 w-[60] border-gray-300'></div>
                <SettingsSidebar />
                <div className='border-t-2 w-[60] border-gray-300'></div>
                <SidbarFooter />
            </div>
        ) : (
            <div className='ml-1 flex flex-col h-[55vh] justify-evenly w-18'>
                {
                    componentsOnClose.map(component=>(
                        <div className='flex flex-col rounded-md hover:bg-gray-100 justify-center items-center p-3 w-full h-24'>
                            {
                                component.element
                            }
                            <span className='text-[12px]'>{component.name}</span>
                        </div>
                    ))
                }
            </div>
        )
    )
}

export default Sidebar