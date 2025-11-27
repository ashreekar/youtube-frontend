import React from 'react';
import VideoCards from './VideoCards';

function ChannelVideo({ channelId, video }) {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-6">
      {video.map((videoItem) => (
        <VideoCards
          key={videoItem._id}
          video={{
            id: videoItem._id,
            title: videoItem.title,
            thumbnail: videoItem.thumbnail,
            uploadedAt: videoItem.createdAt
          }}
        />
      ))}
    </div>
  );
}

export default ChannelVideo;