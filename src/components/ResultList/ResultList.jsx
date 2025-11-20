import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ResultVideoCard from '../cards/ResultVideoCard';
import { clearSearchResults } from '../../states/searchSlic';

function ResultList() {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector(s => s.sidebar.open);
    const videosData = useSelector(s => s.search.results);

    useEffect(() => {
        return () => dispatch(clearSearchResults());
    }, []);

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
                    <ResultVideoCard 
                        key={video.id} 
                        video={video} 
                        isSidebarOpen={isSidebarOpen}
                    />
                ))}
            </div>
        </div>
    )
}

export default ResultList;