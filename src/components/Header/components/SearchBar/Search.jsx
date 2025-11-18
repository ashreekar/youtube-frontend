function Search({needSearchbar}) {
    return (
        <input
            type="text"
            className={needSearchbar?"w-full py-1 px-2 border border-gray-300 rounded-l-full outline-none focus:border-blue-500":'w-full hidden md:block py-2 px-4 border border-gray-300 rounded-l-full outline-none focus:border-blue-500'}
            placeholder='Search'
        />
    )
}

export default Search