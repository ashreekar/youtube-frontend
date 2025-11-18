import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import TopFilter from '../components/TopFilter/TopFilter'
import ResultList from '../components/ResultList/ResultList'

function ResultsPage() {
  return (
     <div className="flex">
      <Sidebar/>
      <div className="flex-1 min-h-screen overflow-x-hidden">
        <TopFilter/>
        <div className="px-4">
          <ResultList />
        </div>
      </div>
    </div>
  )
}

export default ResultsPage