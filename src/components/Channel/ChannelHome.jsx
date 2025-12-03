import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ChannelBanner from './ChannelBanner';
import ChannelMeta from './ChannelMeta';
import SwitchTabs from './SwitchTabs';
import ChannelVideo from './ChannelVideo';
import { useNavigate } from 'react-router-dom';

function ChannelHome({ setIsInfo, self, data, id, changeSubscription, isSubscribed, setManageVideosVisible, setUpdateBanner, setUpdateAvatar }) {
  const navigate = useNavigate();
  const isSidebarOpen = useSelector(state => state.sidebar.open);
  const user = useSelector(state => state.user.loggedIn);

  const [tabs, setTabs] = useState("home");

  if (self && !user) {
    return navigate('/login');
  }

  return (
    <div className={`${isSidebarOpen ? "ml-4 md:ml-64" : "ml-4 md:ml-24"} flex flex-col`}>

      <ChannelBanner url={data.meta.banner || data.meta.avatar} self={self} setUpdateBanner={setUpdateBanner} />

      <ChannelMeta
        setIsInfo={setIsInfo}
        self={self}
        data={data}
        isSubscribed={isSubscribed}
        changeSubscription={changeSubscription}
        setManageVideosVisible={setManageVideosVisible}
        setUpdateAvatar={setUpdateAvatar}
      />

      <SwitchTabs tabs={tabs} setTabs={setTabs} />

      {
      tabs === "home" && <ChannelVideo
        channelId={id}
        video={data?.content?.videos || []}
      />
      }

      {
        tabs === "video" && <ChannelVideo
          channelId={id}
          video={data?.content?.videos || []}
        />
      }

      {
        tabs === "post" && <div className='w-full h-full flex items-center justify-center pt-6'>No posts found</div>
      }

    </div>
  );
}

export default ChannelHome;