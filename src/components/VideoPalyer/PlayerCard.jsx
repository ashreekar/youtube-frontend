import React from 'react'
import Player from './Player'
import VideoMeata from './VideoMeata';

function PlayerCard({ data }) {

  return (
    <div className='flex gap-4 flex-col'>

      <Player source={data.video.videoUrl} />

      <VideoMeata data={data} />
    </div>
  )
}

export default PlayerCard