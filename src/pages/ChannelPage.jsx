import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import ChannelHome from '../components/Channel/ChannelHome';
import Popup from '../components/SidebarAndPopUp/Popup';
import ChannelInfo from '../components/Popups/ChannelInfo';
import { useParams } from 'react-router-dom';
import { useFetch } from "../utils/useFetch";

function ChannelPage() {
  const { channelId } = useParams();
  const [isInfo, setIsInfo] = useState(false);
  const [self, setSelf] = useState(false);

  useEffect(() => {
    if (!channelId) {
      setSelf(true);
    }
  }, [channelId])

  const { data, error, loading } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings,contentDetails&id=${channelId || "UC2GC9I467mJttOXUbb_2uaQ"}&key=ytapikey`,
    "get"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading channel</p>;
  if (!data) return <p>No channel found</p>;

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen overflow-x-hidden">
          <ChannelHome setIsInfo={setIsInfo} self={self} data={data} />
        </div>
      </div>

      {isInfo && (
        <Popup popupkey="channel" closePopup={() => setIsInfo(false)}>
          <ChannelInfo data={data} />
        </Popup>
      )}
    </>
  );
}

export default ChannelPage;