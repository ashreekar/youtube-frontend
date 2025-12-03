import React from 'react'
import { lazy, Suspense } from 'react'
import TopFilterLoader from '../components/Loaders/TopFilter/TopFilterLoader.jsx'
import HomePageLoader from '../components/Loaders/HomePage/HomePageLoader.jsx'
import SidebarLoader from '../components/Loaders/SidebarLoader/Sidebar.jsx'

const TopFilter = lazy(() => import('../components/TopFilter/TopFilter.jsx'))
const HomeFeed = lazy(() => import('../components/HomeFeed/HomeFeed.jsx'))
const Sidebar = lazy(() => import('../components/Sidebar/Sidebar'))

function LandingPage() {

  return (
    <div className="flex">
      <Suspense fallback={<SidebarLoader />}>
        <Sidebar />
      </Suspense>
      <div className="flex-1 min-h-screen overflow-x-hidden">
        <Suspense fallback={<TopFilterLoader />}>
          <TopFilter />
        </Suspense>
        <div className="px-4">
          <Suspense fallback={<HomePageLoader />}>
            <HomeFeed />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default LandingPage