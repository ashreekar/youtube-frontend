import React from 'react';
import { useSelector } from 'react-redux';
import ChannelBanner from './ChannelBanner';
import ChannelMeta from './ChannelMeta';
import SwitchTabs from './SwitchTabs';
import ChannelVideo from './ChannelVideo';

function ChannelHome({ setIsInfo, self, data, id, changeSubscription,isSubscribed }) {
  const isSidebarOpen = useSelector(state => state.sidebar.open);

  return (
    <div className={`${isSidebarOpen ? "ml-4 md:ml-64" : "ml-4 md:ml-24"} flex flex-col`}>

      <ChannelBanner url={data.meta.avatar} />

      <ChannelMeta
        setIsInfo={setIsInfo}
        self={self}
        data={data}
        isSubscribed={isSubscribed}
        changeSubscription={changeSubscription}
      />

      <SwitchTabs />

      <ChannelVideo
        channelId={id}
        video={data?.content?.videos || []}
      />

    </div>
  );
}

export default ChannelHome;