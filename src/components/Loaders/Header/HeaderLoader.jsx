import React from "react";

function HeaderLoader() {
    return (
        <header className="w-full px-4 py-4 flex items-center justify-between animate-pulse">

            <div className="flex items-center gap-4">
                <div className="h-6 w-6 bg-gray-200 rounded"></div>
                <div className="h-6 w-24 bg-gray-200 rounded"></div>
            </div>

            <div className="flex items-center gap-3 flex-1 justify-center max-w-xl px-4">
                <div className="h-10 bg-gray-200 rounded-full w-full"></div>
                <div className="h-10 w-12 bg-gray-200 rounded-md"></div>
                <div className="hidden sm:block h-10 w-10 bg-gray-200 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4">
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            </div>
        </header>
    );
}

export default HeaderLoader;