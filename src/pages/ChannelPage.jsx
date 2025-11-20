import React, { useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ChannelHome from '../components/Channel/ChannelHome'
import Popup from '../components/SidebarAndPopUp/Popup';
import ChannelInfo from '../components/Popups/ChannelInfo';

function ChannelPage() {
  const [isInfo, setIsInfo] = useState(false);


  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 min-h-screen overflow-x-hidden">
          <ChannelHome setIsInfo={setIsInfo} />
        </div>
      </div>

      {
        isInfo && <Popup popupkey="channel" closePopup={() => setIsInfo(false)}>
          <ChannelInfo />
        </Popup>
      }
    </>
  )
}

export default ChannelPage