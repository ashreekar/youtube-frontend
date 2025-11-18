import { useState } from 'react'
import Search from './Search'
import SearchButton from './SearchButton'
import { useSelector, useDispatch } from 'react-redux'
import { setSearchResults, clearSearchResults, setDataList } from '../../../../states/searchSlic'
import { useNavigate } from 'react-router-dom'

function SearchBar({ needSearchbar, setneedSearchbar }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query === "") {
            return;
        }
        dispatch(setSearchResults(query));
        navigate('/results');
    }

    return (
        <div className='flex w-full'>
            <Search needSearchbar={needSearchbar} setQuery={setQuery} query={query} />
            <SearchButton needSearchbar={needSearchbar} setneedSearchbar={setneedSearchbar} handleSearch={handleSearch} />
        </div>
    )
}

export default SearchBar