import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import HomeFeed from '../components/HomeFeed/HomeFeed'

function LandingPage() {

  return (
    <div className="flex">
      <Sidebar />
      <HomeFeed />
    </div>
  )
}

export default LandingPage