import React from 'react'
import { useSelector } from 'react-redux';

function TopFilterLoader() {
    const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
    const isSidebarOpen = useSelector(store => store.sidebar.open);
    return (
        <div
            className={`
            w-full flex items-center gap-3
            px-4 py-2 pr-10
            fixed z-10
            backdrop-blur-xl bg-white/90 dark:bg-[#0f0f0f]/90
            overflow-x-auto no-scrollbar 
            ${isSidebarOpen ? "ml-4 md:ml-64" : "ml-4 sm:ml-20"}
          `}
        >
            {dummy.map(item => (
                <button
                    key={item}
                    className={`px-4 py-1.5 w-32 h-7 rounded-lg text-sm font-medium whitespace-nowrap animate-pulse bg-gray-200 text-gray-200"}`}
                >
                </button>
            ))}
        </div>
    )
}

export default TopFilterLoader