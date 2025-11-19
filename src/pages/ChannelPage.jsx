import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import ChannelHome from '../components/Channel/ChannelHome'

function ChannelPage() {
  return (
     <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen overflow-x-hidden">
        <ChannelHome/>
      </div>
    </div>
  )
}

export default ChannelPage