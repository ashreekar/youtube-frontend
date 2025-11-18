import Search from './Search'
import SearchButton from './SearchButton'

function SearchBar({needSearchbar,setneedSearchbar}) {

    return (
        <div className='flex w-full'>
            <Search needSearchbar={needSearchbar} />
            <SearchButton needSearchbar={needSearchbar} setneedSearchbar={setneedSearchbar} />
        </div>
    )
}

export default SearchBar