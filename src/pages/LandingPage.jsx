import { lazy, Suspense } from 'react'
import HomePageLoader from '../components/Loaders/HomePage/HomePageLoader.jsx'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import TopFilter from '../components/TopFilter/TopFilter.jsx'

// lazy importing home feed
const HomeFeed = lazy(() => import('../components/HomeFeed/HomeFeed.jsx'))

function LandingPage() {

  return (
    <div className="flex">
        <Sidebar />
      <div className="flex-1 min-h-screen overflow-x-hidden">
          <TopFilter />
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