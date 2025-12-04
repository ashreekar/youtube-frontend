import React from 'react';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

function ChannelVideo({ channelId, video }) {
// Renders video cards of channel
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-6">
      {video.map((videoItem) => (
        <Link to={`/watch/${videoItem._id}`} key={videoItem._id}>
          <VideoCards
            key={videoItem._id}
            video={{
              id: videoItem._id,
              title: videoItem.title,
              thumbnail: videoItem.thumbnail,
              uploadedAt: videoItem.createdAt,
              views: videoItem.views
            }}
          />
        </Link>
      ))}
    </div>
  );
}

export default ChannelVideo;