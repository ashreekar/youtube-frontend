import React from 'react'
import PlayerPageCard from './PlayerPageCard'
import PlayerFeed from './PlayerFeed'

function PlayerSection() {
    return (
        // <div className='grid grid-cols-1 md:grid-cols-3'>
        <div className='flex flex-col md:flex-row items-stretch'>
            {/* Video,comment and like part */}
                <PlayerPageCard />

            {/* Feed part and filter part */}
                <PlayerFeed />
        </div>
    )
}

export default PlayerSection