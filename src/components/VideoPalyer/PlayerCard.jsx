import React from 'react'
import Player from './Player'
import VideoMeata from './VideoMeata';

function PlayerCard({ data }) {

  return (
    <div className='h-[47vh] md:h-[80vh]'>

      <Player source={data.video.videoUrl} />

      <VideoMeata data={data} />
    </div>
  )
}

export default PlayerCard