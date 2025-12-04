import { forwardRef } from 'react'
import { FaSearch } from 'react-icons/fa'

// using forward ref to use fre of button to handle search outside
const SearchButton = forwardRef(function SearchButton({ needSearchbar, setneedSearchbar, handleSearch }, ref) {
    return (
        <>
            {/* renders on mobile view */}
            <div className={needSearchbar ? "hidden" : 'flex md:hidden items-center justify-center'} onClick={() => setneedSearchbar(true)}>
                <FaSearch size={20} className="text-gray-600" />
            </div>

            {/* Handles search */}
            <button onClick={handleSearch}
                ref={ref}
                type='submit'
                id='search_button'
                className={needSearchbar ? "block rounded-r-full cursor-pointer px-2 py-1 outline-none border border-gray-300 bg-gray-50 hover:bg-gray-100 border-l-0" : 'hidden md:block rounded-r-full cursor-pointer px-5 py-2 outline-none border border-gray-300 bg-gray-50 hover:bg-gray-100 md:border-l-0'}
            >
                <FaSearch size={20} className="text-gray-600" />
            </button>
        </>
    )
})

export default SearchButton