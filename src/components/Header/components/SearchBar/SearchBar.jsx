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
        <form className='flex w-full' method='get' onSubmit={handleSearch}>
            <Search needSearchbar={needSearchbar} setQuery={setQuery} query={query} />
            <SearchButton needSearchbar={needSearchbar} setneedSearchbar={setneedSearchbar} handleSearch={handleSearch} />
        </form>
    )
}

export default SearchBar