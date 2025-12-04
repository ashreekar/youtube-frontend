import { useRef, useState } from 'react'
import Search from './Search'
import SearchButton from './SearchButton'
import { useDispatch } from 'react-redux'
import { setRecent } from '../../../../states/searchSlic'
import { useNavigate } from 'react-router-dom'

function SearchBar({ needSearchbar, setneedSearchbar }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const button = useRef();

    // query to be searched
    const [query, setQuery] = useState("");

    // prevents form from submission
    const handleSearch = async (e) => {
        e.preventDefault();
        // if empty query then no need to search
        if (!query.trim()) {
            return;
        }

        //  encoding query value to pass as part of uri as query parmas
        const encodedQuery = encodeURIComponent(query.trim());
        dispatch(setRecent(query.trim()));
        navigate(`/results?search_query=${encodedQuery}`);
    }

    return (
        <div className='flex w-full justify-center'>
            <Search ref={button} needSearchbar={needSearchbar} setQuery={setQuery} query={query} handleSearch={handleSearch} />
            <SearchButton ref={button} needSearchbar={needSearchbar} setneedSearchbar={setneedSearchbar} handleSearch={handleSearch} />
        </div>
    )
}

export default SearchBar