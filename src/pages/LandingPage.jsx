import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import HomeFeed from '../components/HomeFeed/HomeFeed'
import TopFilter from '../components/TopFilter/TopFilter'

function LandingPage() {

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen overflow-x-hidden">
        <TopFilter />
        <div className="px-4">
          <HomeFeed />
        </div>
      </div>
    </div>
  )
}

export default LandingPage