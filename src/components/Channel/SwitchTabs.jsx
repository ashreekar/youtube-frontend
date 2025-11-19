import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SwitchTabs() {
    return (
        <div>
            <div className='mb-0 flex mt-8 gap-10 text-xl font-medium text-gray-600'>
                <p className='active:border-b-2 active:border-b-black active:text-black hover:border-b-2 hover:border-gray-700 cursor-pointer'>Home</p>
                <p className='active:border-b-2 active:border-b-black active:text-black hover:border-b-2 hover:border-gray-700 cursor-pointer'>Videos</p>
                <p className='active:border-b-2 active:border-b-black active:text-black hover:border-b-2 hover:border-gray-700 cursor-pointer'>Post</p>
                
                <div>
                    <FiSearch className='active:border-b-2 active:border-b-black active:text-black hover:border-b-2 hover:border-gray-700 cursor-pointer h-full w-full' size={20}/>
                </div>
            </div>

            <div className='border-t-2 border-gray-300 shadow-2xl w-[75vw] mt-0'></div>
        </div>
    )
}

export default SwitchTabs