import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import VideoCard from '../cards/VideoCard.jsx';
import { setDataList } from '../../states/searchSlic.js'
import { Link } from 'react-router-dom';
import { useFetch } from '../../utils/useFetch.js';

function HomeFeed() {
    const dispatch = useDispatch();
    const { data, error, loading } = useFetch("http://localhost:3317/api/v1/video", "get");

    const isSidebarOpen = useSelector(store => store.sidebar.open);

    if (!data) {
        return <p>Loading</p>;
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
                {data.data.map(video => (
                    <Link to={`watch/${video._id}`} key={video._id}>
                        <VideoCard video={video} isSidebarOpen={isSidebarOpen} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default HomeFeed