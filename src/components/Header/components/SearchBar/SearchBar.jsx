import React from 'react'
import Search from './Search'
import SearchButton from './SearchButton'

function SearchBar() {
  return (
    <div className='flex sm:[30vw] lg:w-[50vw] justify-center p-3'>
        <Search/>
        <SearchButton/>
    </div>
  )
}

export default SearchBar