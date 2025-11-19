import React from 'react'
import PlayerPageCard from './PlayerPageCard'
import PlayerFeed from './PlayerFeed'

function PlayerSection() {
    return (
        // <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='flex flex-1 min-h-screen ml-4 sm:ml-24 mr-4 sm:mr-8 flex-col md:flex-row items-stretch'>
            {/* Video,comment and like part */}
            <PlayerPageCard />

            {/* Feed part and filter part */}
            <PlayerFeed />
        </div>
    )
}

export default PlayerSection