import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import VideoCard from '../cards/VideoCard.jsx';
import { useFetch } from '../../utils/useFetch.js';
import { setVideosItem } from '../../states/videoSlice.js';
import ErrorFallback from '../ErrorBoundary/ErrorFallback.jsx';
import HomePageLoader from '../Loaders/HomePage/HomePageLoader.jsx';

function HomeFeed() {
    const dispatch = useDispatch();
    // Loading videos for the first time
    const { data, error, loading } = useFetch("http://localhost:3317/api/v1/video", "get");

    // cheking whethe sidebar opened or not
    // important to maintain layout
    const isSidebarOpen = useSelector(store => store.sidebar.open);
    // videos stored in videosItem
    const videos = useSelector(state => state.video.videosItem);

    // adding to render videos items so that filtered also renders
    useEffect(() => {
        if (data && videos.length === 0) {
            dispatch(setVideosItem(data.data));
        }
    }, [data, videos.length, dispatch]);


    if (error) {
        return <ErrorFallback key={"failed to load resouces"} />
    }

    if (!data || !videos || videos.length === 0) {
        return <div className='w-full h-full flex items-center justify-center text-xl font-medium'>No videos found</div>;
    }

    if (loading) {
        return <HomePageLoader />;
    }

    // rendering all videos
    return (
        <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-4 md:ml-64" : "ml-4 sm:ml-20"}`}>
            <div className={`grid gap-5 p-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8`}>
                {videos.map(video => (
                    <VideoCard key={video._id} video={video} isSidebarOpen={isSidebarOpen} />
                ))}
            </div>
        </div>
    )
}

export default HomeFeed