import React, { lazy, Suspense, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
const TopFilter = lazy(() => import('../components/TopFilter/TopFilter'));
const ResultList = lazy(() => import('../components/ResultList/ResultList'));
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../states/searchSlic';

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
        dispatch(setSearchResults(res?.data?.data))
        console.log(res)
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  if (loading) return <p>Loading...</p>;


  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex-1 min-h-screen overflow-x-hidden">
        <Suspense>
          <TopFilter />
        </Suspense>

        <div className="px-2 sm:px-4">
          <Suspense>
            <ResultList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage;