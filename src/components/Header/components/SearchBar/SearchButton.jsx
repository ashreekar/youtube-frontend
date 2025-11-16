import { FaSearch } from 'react-icons/fa'

function SearchButton() {
    return (
        <button
            className='rounded-r-full cursor-pointer px-5 py-2 outline-none border border-gray-300 bg-gray-50 hover:bg-gray-100 border-l-0'
        >
            <FaSearch size={20} className="text-gray-600" />
        </button>
    )
}

export default SearchButton