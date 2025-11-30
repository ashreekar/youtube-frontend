import { useState } from 'react'
import Search from './Search'
import SearchButton from './SearchButton'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchResults, setRecent } from '../../../../states/searchSlic'
import { useNavigate } from 'react-router-dom'

function SearchBar({ needSearchbar, setneedSearchbar }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) {
            return;
        }

        const encodedQuery = encodeURIComponent(query.trim());
        dispatch(setRecent(query.trim()));
        navigate(`/results?search_query=${encodedQuery}`);
    }

    return (
        <div className='flex w-full'>
            <Search needSearchbar={needSearchbar} setQuery={setQuery} query={query} handleSearch={handleSearch} />
            <SearchButton needSearchbar={needSearchbar} setneedSearchbar={setneedSearchbar} handleSearch={handleSearch} />
        </div>
    )
}

export default SearchBar