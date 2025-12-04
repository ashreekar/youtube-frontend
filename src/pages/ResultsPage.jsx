import React, { lazy, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults } from '../states/searchSlic';

const TopFilter = lazy(() => import('../components/TopFilter/TopFilter'));
const ResultList = lazy(() => import('../components/ResultList/ResultList'));
import ErrorFallback from "../components/ErrorBoundary/ErrorFallback"
import HomePageLoader from '../components/Loaders/HomePage/HomePageLoader';
import FeedLoader from '../components/Loaders/FeedLoader';

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(state => state.sidebar.open);
  const searchEncoded = location?.search;
  const query = new URLSearchParams(searchEncoded).get("search_query");

  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  useEffect(() => {
    if (!query) {
      navigate('/');
    }

    async function fetchResults() {
      try {
        const res = await axios.get(
          `http://localhost:3317/api/v1/search?search_query=${query}`
        );
        if (!res?.data?.data) {
          return dispatch(setSearchResults([]));
        }
        dispatch(setSearchResults(res?.data?.data || []))
        setFound(true);
      } catch {
        return <ErrorFallback />
      }
      finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  if (loading) return <FeedLoader />;
  if(!found){
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
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-1 min-h-screen overflow-x-hidden">
        <TopFilter />

        <div className="px-2 sm:px-4">
          <ResultList notfound={!found} />
        </div>
      </div>
    </div>
  )
}

export default ResultsPage;