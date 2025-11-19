import React from 'react'
import { useSelector } from 'react-redux'
import ChannelBanner from './ChannelBanner';
import ChannelMeta from './ChannelMeta';
import SwitchTabs from './SwitchTabs';
import ChannelVideo from './ChannelVideo';

function ChannelHome() { 
    const isSidebarOpen=useSelector(state=>state.sidebar.open);
  return (
    <div className={`${isSidebarOpen?"ml-4 md:ml-64":"ml-4 md:ml-24"} flex flex-col`}>
        <ChannelBanner isSidebarOpen={isSidebarOpen}/>
        <ChannelMeta/>
        <SwitchTabs/>
        <ChannelVideo/>
    </div>
  )
}

export default ChannelHome