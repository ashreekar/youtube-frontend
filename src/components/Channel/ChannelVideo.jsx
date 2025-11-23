import React from 'react';
import VideoCards from './VideoCards';
import { useFetch } from '../../utils/useFetch';

function ChannelVideo({ playListId }) {

  const { data, error, loading } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playListId}&maxResults=50&key=yt-api-key`,
    "get"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading videos</p>;
  if (!data || !data.items) return <p>No videos found</p>;

  const videosData = data.items;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-6">
      {videosData.map((videoItem) => (
        <VideoCards
          key={videoItem.contentDetails.videoId}
          video={{
            id: videoItem.contentDetails.videoId,
            title: videoItem.snippet.title,
            thumbnail: videoItem.snippet.thumbnails.high.url,
            uploadedAt: videoItem.snippet.publishedAt
          }}
        />
      ))}
    </div>
  );
}

export default ChannelVideo;