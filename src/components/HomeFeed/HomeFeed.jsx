import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import VideoCard from '../cards/VideoCard.jsx';
import { setDataList } from '../../states/searchSlic.js'
import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/useFetch.js';

function HomeFeed() {
    const dispatch = useDispatch();
    const { data, error, loading } = useFetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=yt-api", "get");

    const videosData = data?.items || [];

    const isSidebarOpen = useSelector(store => store.sidebar.open);

    useEffect(() => {
        if (videosData.length > 0) {
            const normalized = videosData.map((v) => ({
                id: v.id,
                title: v.snippet?.title || "",
                channelName: v.snippet?.channelTitle || "",
                description: v.snippet?.description || "",
                thumbnail: v.snippet?.thumbnails?.medium?.url || "",
                views: v.statistics?.viewCount || "0",
                publishedAt: v.snippet?.publishedAt || "",
                raw: v
            }));

            dispatch(setDataList(normalized));
        }
    }, [videosData]);


    if (loading) {
        return null;
    }

    return (
        <div
            className={`
          flex-1 transition-all duration-300 
          ${isSidebarOpen ? "ml-4 md:ml-64" : "ml-4 sm:ml-20"}
        `}
        >
            <div
                className={`
    grid gap-5 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     mt-8
  `}
            >
                {videosData.map(video => (
                    <Link to={`watch/${video.id}`}>
                        <VideoCard video={video} isSidebarOpen={isSidebarOpen} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeFeed