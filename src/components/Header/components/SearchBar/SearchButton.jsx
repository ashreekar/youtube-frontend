import { FaSearch } from 'react-icons/fa'

function SearchButton() {
    return (
        <button
            className='md:rounded-r-full cursor-pointer md:px-5 md:py-2 outline-none md:border md:border-gray-300 md:bg-gray-50 hover:bg-gray-100 md:border-l-0'
        >
            <FaSearch size={20} className="text-gray-600" />
        </button>
    )
}

export default SearchButton