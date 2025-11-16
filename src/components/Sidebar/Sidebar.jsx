import ExploreSidebar from './ExploreSidebar'
import SettingsSidebar from './SettingsSidebar'
import SidbarFooter from './SidbarFooter'
import SubscriptionSidebar from './SubscriptionSidebar'
import UserSidebar from './UserSidebar'
import YoutubeSidebar from './YoutubeSidebar'
import { useSelector } from 'react-redux'

function Sidebar() {
    const isSidebarOpen = useSelector(store => store.sidebar.open);

    return (
        <div className={`${isSidebarOpen ? "flex flex-col" : "hidden"}`}>
            <YoutubeSidebar />
            <hr />
            <UserSidebar />
            <hr />
            <SubscriptionSidebar />
            <hr />
            <ExploreSidebar />
            <hr />
            <SettingsSidebar />
            <hr />
            <SidbarFooter />
        </div>
    )
}

export default Sidebar