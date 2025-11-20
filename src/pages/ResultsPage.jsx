import React, { lazy, Suspense } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
const TopFilter = lazy(() => import('../components/TopFilter/TopFilter'));
const ResultList = lazy(() => import('../components/ResultList/ResultList'));

function ResultsPage() {
  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-1 min-h-screen overflow-x-hidden">
        <Suspense>
          <TopFilter />
        </Suspense>

        <div className="px-2 sm:px-4">
          <Suspense>
            <ResultList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage;