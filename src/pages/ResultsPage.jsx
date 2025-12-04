import React, { lazy, useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchResults } from '../states/searchSlic';

import FeedLoader from '../components/Loaders/FeedLoader';
import TopFilter from '../components/TopFilter/TopFilter';
import ResultList from '../components/ResultList/ResultList';

function ResultsPage() {
  // uselocation is used to fetch the query
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSidebarOpen = useSelector(state => state.sidebar.open);

  // location.search gives the query object encoded one
  const searchEncoded = location?.search;

  // creats a query string to hit backend by decoding the encoded one
  const query = new URLSearchParams(searchEncoded).get("search_query");

  const [loading, setLoading] = useState(true);
  const [found, setFound] = useState(false);

  useEffect(() => {
    // if no query found then can navigate to home
    if (!query) {
      navigate('/');
    }

    //  fetching only if query exists
    async function fetchResults() {
      try {
        const res = await axios.get(
          `http://localhost:3317/api/v1/search?search_query=${query}`
        );
        // setting search results in store to accesisable by childrens
        dispatch(setSearchResults(res?.data?.data || []))
        setFound(true)

        if (res.data.data.length === 0) {
          // this flag ensures [ ] results will be rendered properly
          setFound(false)
        }
      } catch {
        // on error rendering the error element
        setFound(false)
      }
      finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  // loading feed loader on load
  if (loading) return <FeedLoader />;

  // if not found then rendering the empty element
  if (!found) {
    return <div
      className={`
              flex items-center justify-center
              ${isSidebarOpen ? "ml-64" : "ml-20"}
              max-w-full
            `}
    >
      <h3 className='text-lg font-medium mt-9'>No videos matches your search</h3>
    </div>
  }


  return (
    // Rendering sidebar and top filter is ocnstant
    // sidebar not recieving any flags this means side bar on minimized persists
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