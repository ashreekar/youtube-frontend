import React from 'react'
import { FiSearch } from 'react-icons/fi'

function SwitchTabs({ tabs,setTabs }) {
    return (
        <div>
            <div className='mb-0 flex mt-8 gap-10 text-xl font-medium text-gray-600'>
                <p onClick={()=>setTabs("home")} className={`${tabs === "home" && "border-b-2 border-b-black text-black"} border-b-2 border-b-white hover:border-gray-700 cursor-pointer`}>Home</p>
                <p onClick={()=>setTabs("video")} className={`${tabs === "video" && "border-b-2 border-b-black text-black"} border-b-white hover:border-gray-700 cursor-pointer`}>Videos</p>
                <p onClick={()=>setTabs("post")} className={`${tabs === "post" && "border-b-2 border-b-black text-black"} border-b-2 border-b-white hover:border-gray-700 cursor-pointer`}>Post</p>

                <div>
                    <FiSearch className='active:border-b-2 active:border-b-black active:text-black hover:border-b-2 hover:border-gray-700 cursor-pointer h-full w-full' size={20} />
                </div>
            </div>

            <div className='border-t-2 border-gray-300 shadow-2xl w-[75vw] mt-0'></div>
        </div>
    )
}

export default SwitchTabs