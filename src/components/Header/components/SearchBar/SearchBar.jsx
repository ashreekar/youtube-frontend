import Search from './Search'
import SearchButton from './SearchButton'

function SearchBar() {
    return (
        <div className='flex w-full'>
            <Search />
            <SearchButton />
        </div>
    )
}

export default SearchBar