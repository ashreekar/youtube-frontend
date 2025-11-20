import React from 'react'

function ChannelBanner({ url }) {
  return (
    <div className="w-full h-16 sm:h-32 md:h-44 lg:h-52 mt-4 rounded-2xl overflow-hidden">
      <img
        src={url}
        alt="channel-banner"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  )
}

export default ChannelBanner