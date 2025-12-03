import React, { lazy, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../states/searchSlic';

const TopFilter = lazy(() => import('../components/TopFilter/TopFilter'));
const ResultList = lazy(() => import('../components/ResultList/ResultList'));
import ErrorFallback from "../components/ErrorBoundary/ErrorFallback"
import HomePageLoader from '../components/Loaders/HomePage/HomePageLoader';

function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchEncoded = location?.search;
  const query = new URLSearchParams(searchEncoded).get("search_query");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) {
      navigate('/');
    }

    async function fetchResults() {
      try {
        const res = await axios.get(
          `http://localhost:3317/api/v1/search?search_query=${query}`
        );
        dispatch(setSearchResults(res?.data?.data || []))
      } catch {
        return <ErrorFallback />
      }
      finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  if (loading) return <HomePageLoader/>;


  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-1 min-h-screen overflow-x-hidden">
        <TopFilter />

        <div className="px-2 sm:px-4">
          <ResultList />
        </div>
      </div>
    </div>
  )
}

export default ResultsPage;