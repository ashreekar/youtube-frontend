import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ResultVideoCard from '../cards/ResultVideoCard';
import { clearSearchResults } from '../../states/searchSlic';
import { Link } from 'react-router-dom';

function ResultList() {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(state => state.sidebar.open);
    const videosData = useSelector(state => state.search.results);

    useEffect(() => {
        return () => dispatch(clearSearchResults());
    }, []);

    if (!videosData || videosData.length === 0) {
        return <div
            className={`
              flex items-center justify-center
              ${isSidebarOpen ? "ml-64" : "ml-20"}
              max-w-full
            `}
        >
            <h3 className='text-lg font-medium'>No videos matches your search</h3>
        </div>
    }

    return (
        <div
            className={`
              flex-1 transition-all duration-300 
              ${isSidebarOpen ? "ml-64" : "ml-20"}
              max-w-full
            `}
        >
            <div className="
                grid 
                grid-cols-1
                gap-6 
                mt-12
            ">
                {videosData.map(video => (
                    <Link to={`/watch/${video._id}`}>
                        <ResultVideoCard
                            key={video._id}
                            video={video}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default ResultList;