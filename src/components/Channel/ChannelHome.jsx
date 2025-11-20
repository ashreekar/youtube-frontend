import React from 'react';
import { useSelector } from 'react-redux';
import ChannelBanner from './ChannelBanner';
import ChannelMeta from './ChannelMeta';
import SwitchTabs from './SwitchTabs';
import ChannelVideo from './ChannelVideo';

function ChannelHome({ setIsInfo, self, data }) {
  const isSidebarOpen = useSelector(state => state.sidebar.open);

  const channel = data.items[0];

  return (
    <div className={`${isSidebarOpen ? "ml-4 md:ml-64" : "ml-4 md:ml-24"} flex flex-col`}>
      
      <ChannelBanner url={channel.brandingSettings.image.bannerExternalUrl} />

      <ChannelMeta 
        setIsInfo={setIsInfo} 
        self={self} 
        data={channel} 
      />

      <SwitchTabs />

      <ChannelVideo 
        channelId={channel.id} 
        playListId={channel.contentDetails.relatedPlaylists.uploads} 
      />

    </div>
  );
}

export default ChannelHome;